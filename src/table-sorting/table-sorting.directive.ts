import {Directive, ElementRef, Input, HostListener, AfterViewInit} from '@angular/core';
import {TableSortingService} from './table-sorting.service';
import {GlobalConfig, SortingConfig} from './config.model';

@Directive({
  selector: '[appSorting]'
})
export class TableSortingDirective implements AfterViewInit {

  private chevron: HTMLElement;

  @Input() config: SortingConfig;

  constructor( private el: ElementRef,
               private sorting: TableSortingService ) {}

  ngAfterViewInit() {
    let i = document.createElement('i');
    i.className = 'fa fa-sort';
    i.setAttribute('aria-hidden', 'true');
    this.el.nativeElement.appendChild(i);
    this.chevron = i;
    this.sorting.iNodes.next({name: this.config.dataType, node: i});
  }

  @HostListener('mouseenter') onMouseEnter() {
    // do some style for the arrow
  }
  @HostListener('mouseleave') onMouseLeave() {
    // do some style for the arrow
  }

  @HostListener('click') onSort() {
    this.sorting.nodes[this.config.dataType].forEach(i => {
      i.className = 'fa fa-sort';
    });

    switch (this.config.orderDirection) {
      case null:
        this.config.orderDirection = 1;
        this.chevron.className = 'fa fa-sort-asc';
        break;
      case 1:
        this.config.orderDirection = -1;
        this.chevron.className = 'fa fa-sort-desc';
        break;
      case -1:
        this.config.orderDirection = 1;
        this.chevron.className = 'fa fa-sort-asc';
        break;
      default:
        this.config.orderDirection = 1;
        this.chevron.className = 'fa fa-sort-asc';
    }

    let payload: GlobalConfig = {
      type: this.config.dataType,
      config: {
        orderBy: this.config.orderBy,
        orderDirection: this.config.orderDirection,
        startIndex: this.sorting.sortingConfig[this.config.dataType].startIndex,
        numItems: this.config.numItems
      },
      dataFn: this.config.dataFn
    };

    this.sorting.setSortingConfig.next(payload);
  }

}
