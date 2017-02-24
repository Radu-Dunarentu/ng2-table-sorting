import {Injectable, EventEmitter} from '@angular/core';
import {GlobalConfig} from './config.model';

@Injectable()
export class TableSortingService {
  private _sortingConfig: any = {};
  private _nodes: any = {};

  public setSortingConfig = new EventEmitter<GlobalConfig>();
  public iNodes = new EventEmitter();

  public get sortingConfig() {
    return this._sortingConfig;
  }

  public set sortingConfig(value: GlobalConfig) {
    let id = value.type;
    this._sortingConfig[id] = value.config;
  }

  public get nodes() {
    return this._nodes;
  }

  public set nodes(value) {
    this._nodes[value.name].push(value.node);
  }

  public set newnode(value) {
    this._nodes[value.name] = [value.node];
  }

  constructor(  ) {
    this.setSortingConfig.subscribe((event: GlobalConfig) => {
      if (event.dataFn) {
        event.dataFn(event.config);
        this.sortingConfig = event;
        return;
      }
    });

    this.iNodes.subscribe(event => {
      if (this.nodes[event.name]) {
        this.nodes = event;
      } else {
        this.newnode = event;
      }
    });
  }

}
