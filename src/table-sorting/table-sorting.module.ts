import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSortingDirective } from './table-sorting.directive';
import { TableSortingService} from './table-sorting.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableSortingDirective],
  providers: [ TableSortingService],
  exports: [TableSortingDirective]
})
export class TableSortingModule { }
