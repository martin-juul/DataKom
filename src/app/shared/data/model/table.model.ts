export class Table {
  constructor(
    public title: string,
    public caption: string,
    public link: TableLink,
    public headings: string[],
    public footers: string[],
    public columns: string[][]
  ) {}
}

class TableLink {
  constructor(
    public label: string,
    public path: string
  ) { }
}
