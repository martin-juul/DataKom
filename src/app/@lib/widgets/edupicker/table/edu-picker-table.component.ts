import { Component, Input } from "@angular/core";

import { Table, TableBeforeText } from "../edu-picker.service";

@Component({
  selector: 'app-edu-picker-table',
  templateUrl: './edu-picker-table.component.html',
  styleUrls: ['./edu-picker-table.component.html']
})
export class EduPickerTableComponent {
  @Input() tables: Table[];
  @Input() beforeText: TableBeforeText;

  constructor() {
  }
}
