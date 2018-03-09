import { Component, Input } from "@angular/core";
import { Button, Table, TableBeforeText } from "./edu-picker.service";

@Component({
  selector: 'app-edu-picker',
  templateUrl: './edu-picker.component.html',
  styleUrls: ['./edu-picker.component.scss'],
})
export class EduPickerComponent {
  @Input() tables: Table[];
  @Input() tableBeforeText: TableBeforeText;
  @Input() buttons: Button[];
  @Input() eduTypes: Button[];

  constructor() {
  }
}
