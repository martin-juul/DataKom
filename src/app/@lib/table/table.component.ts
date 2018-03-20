import { Component, Input } from '@angular/core';
import { TableSemesterAcoordion } from '../../shared/data/model/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() headings: string[];
  @Input() footers: string[];
  @Input() caption: string;
  @Input() columns: string[][];
  @Input() accordions?: TableSemesterAcoordion[][];

  isFirstOpen = 1;
  panelClass = 'semesterPanel';

  constructor() {
  }
}
