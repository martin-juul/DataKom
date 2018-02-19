import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() headings: string[];
  @Input() footers: string[];
  @Input() caption: string;
  @Input() columns: Array<Array<string>>;

}
