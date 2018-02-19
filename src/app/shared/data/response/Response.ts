import { Table } from "../model/table.model";
import { TableBeforeText } from "../../../@lib/widgets/edupicker/edu-picker.service";

interface Pagination {
  totalCount: number,
  totalPages: number,
  prevLink?: string,
  nextLink?: string
}

interface BaseResponse {
  status: number;
}

export interface Response extends BaseResponse {
  result: any;
}

export interface TableResponse extends BaseResponse {
  beforeText: TableBeforeText;
  tables: Table|Table[];
}

export interface PagedResponse extends Response {
  pagination: Pagination;
}
