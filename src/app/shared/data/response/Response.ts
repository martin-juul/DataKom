interface Pagination {
  totalCount: number,
  totalPages: number,
  prevLink?: string,
  nextLink?: string
}

export interface Response {
  status: number;
  ok: boolean;
  result: any;
}

export interface PagedResponse extends Response {
  pagination: Pagination;
}
