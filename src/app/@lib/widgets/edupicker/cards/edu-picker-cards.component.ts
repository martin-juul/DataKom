import { Component, Input } from '@angular/core';
import { Button, EduPickerService } from '../edu-picker.service';

@Component({
  selector: 'app-edu-cards',
  templateUrl: './edu-picker-cards.component.html',
  styleUrls: ['./edu-picker-cards.component.scss']
})
export class EduPickerCardsComponent {
  @Input('studentTypes') buttons: Button[];
  isClicked = false;
  clickedIndex: number;
  colorClasses: string[] = [
    'bg-orange',
    'bg-blue',
    'bg-cyan',
    'bg-green',
    'bg-red'
  ];

  constructor(private eduPickerService: EduPickerService) { }

  getButtonColor(index: number) {
    return this.colorClasses[index];
  }

  selected(emitValue: string|number, selectedIndex?: number) {
    this.isClicked = true;
    this.clickedIndex = selectedIndex;
    this.eduPickerService.onSelectedStudentType(emitValue);
  }
}
