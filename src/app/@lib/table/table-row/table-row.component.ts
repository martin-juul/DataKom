import {Component, Input} from '@angular/core';

@Component({
  selector: '[app-table-row]',
  template: `<td *ngFor="let item of row">{{ item }}</td>`
})
export class TableRowComponent {
  @Input() row: any;
}
