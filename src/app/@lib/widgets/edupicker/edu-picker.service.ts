import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EduPickerService {
  private selectedSource = new Subject<string|number>();
  selected$ = this.selectedSource.asObservable();
  private selectedStudentType = new Subject<string|number>();
  selectedStudentType$ = this.selectedStudentType.asObservable();

  onSelected(selection: string|number) {
    this.selectedSource.next(selection);
  }

  onSelectedStudentType(selection: string|number) {
    this.selectedStudentType.next(selection);
  }

}

export interface Button {
  label: string;
  emit?: string|number;
  color?: string;
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
}

export interface TableBeforeText {
  title: string;
  subtitle?: string;
}
