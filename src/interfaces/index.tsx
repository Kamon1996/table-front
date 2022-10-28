export interface IFilters {
  page: number;
  filter: IFilterForm;
  sort_by: string;
}
export interface IFilterForm {
  column: string;
  type: string;
  value: string;
}
export interface IPageInfo {
  pages: number;
  page: number;
}
export interface ITableHeadData {
  title: string;
  sortable: boolean;
  accessor: string;
  minWidth: number;
}
export interface IBook {
  id: number;
  title: string;
  count: number;
  range: number;
  date: string;
  created_at: string;
  updated_at: string;
}
