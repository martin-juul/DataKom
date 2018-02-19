export class Table {
  constructor(
    title: string,
    caption: string,
    link: TableLink,
    headings: string[],
    footers: string[],
    columns: string[][]
  ) {}
}

class TableLink {
  constructor(
    label: string,
    path: string
  ) { }
}
