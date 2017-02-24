import { NgModule, ModuleWithProviders } from "@angular/core";
import {TableSortingService} from './src/table-sorting/table-sorting.service';
import {TableSortingDirective} from './src/table-sorting/table-sorting.directive';

// for manual imports
export * from './src/table-sorting/config.model';
export * from './src/table-sorting/table-sorting.directive';
export * from './src/table-sorting/table-sorting.service';


@NgModule({
  declarations: [
    TableSortingDirective
  ],
  providers: [
    TableSortingService
  ],
  exports: [
    TableSortingDirective
  ]
})
export class ng2TableSortingModule {

  /* optional: in case you need users to override your providers */
  static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
    return {
      ngModule: ng2TableSortingModule,
      providers: configuredProviders
    };
  }
}
