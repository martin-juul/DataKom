export class Table {
  constructor(
    public title?: string,
    public caption?: string,
    public headings?: string[],
    public footers?: string[],
    public columns?: string[][] | any,
    public link?: TableLink,
    public accordions?: TableSemesterAcoordion[][]
  ) {}
}

export class TableLink {
  constructor(
    public label: string,
    public path: string
  ) { }
}

export class TableSemesterAcoordion {
  constructor(
    public course_no?: number,
    public course_name?: string,
    public course_duration?: string,
    public school_attendance_desc?: string,
    public internship_desc?: string
  ) { }
}
