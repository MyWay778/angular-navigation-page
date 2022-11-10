import { Component, Input } from '@angular/core';
import { ITableColumn, ITableData } from 'src/app/typings/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() data: ITableData[] = [];
  @Input() columns: ITableColumn[] = [];

  constructor() {}
}
