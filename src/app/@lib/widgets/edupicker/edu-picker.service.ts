import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { TableSemesterAcoordion } from '../../../shared/data/model/table.model';

@Injectable()
export class EduPickerService {
  private selectedSource = new Subject<string|number>();
  selected$ = this.selectedSource.asObservable();

  private selectedEducation = new Subject<string|number>();
  selectedEducation$ = this.selectedEducation.asObservable();

  private selectedStudentType = new Subject<string|number>();
  selectedStudentType$ = this.selectedStudentType.asObservable();

  onSelected(selection: string|number) {
    this.selectedSource.next(selection);
  }

  onSelectedEducation(selection: string|number) {
    this.selectedEducation.next(selection);
    this.resetStudentType();
  }

  onSelectedStudentType(selection: string|number) {
    this.selectedStudentType.next(selection)
  }

  resetStudentType() {
    this.selectedStudentType.next(null);
  }

}

export class Button {
  constructor(
    public label: string,
    public emit?: string|number,
    public color?: string
  ) { }
}

export interface TableLink {
  label: string;
  path: string;
}

export interface Table {
  title?: string;
  caption?: string;
  link?: TableLink;
  headings: string[];
  footers: string[];
  columns: string[];
  accordions: TableSemesterAcoordion[];
}

export interface TableBeforeText {
  title: string;
  subtitle?: string;
}
