export interface ITableColumn {
  title: string;
  key: string | number;
}

export interface ITableData {
  [key: ITableColumn['key']]: string | number;
}