import { Component, Input } from "@angular/core";
import { Button, EduPickerService, TableBeforeText } from '../edu-picker.service';

@Component({
  selector: 'app-edu-picker-menu',
  templateUrl: './edu-picker-menu.component.html',
  styleUrls: ['edu-picker-menu.component.scss']
})
export class EduPickerMenuComponent {
  @Input() buttons: Button[];
  @Input() beforeText: TableBeforeText;
  isClicked = false;
  clickedIndex: number;
  clickedLabel: string;
  colorClasses: string[] = [
    'bg-blue',
    'bg-red',
    'bg-green'
  ];

  constructor(private eduPickerService: EduPickerService) { }

  getButtonColor(index: number) {
    return this.colorClasses[index];
  }

  selected(emitValue: string|number, selectedIndex?: number, selectedLabel?: string) {
    this.isClicked = true;
    this.clickedLabel = selectedLabel;
    this.clickedIndex = selectedIndex;
    this.eduPickerService.onSelectedEducation(emitValue);
  }
}
