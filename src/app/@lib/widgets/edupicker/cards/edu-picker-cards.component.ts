import { Component, Input } from '@angular/core';
import { Button, EduPickerService } from '../edu-picker.service';

@Component({
  selector: 'app-edu-cards',
  templateUrl: './edu-picker-cards.component.html',
  styleUrls: ['./edu-picker-cards.component.scss']
})
export class EduPickerCardsComponent {
  @Input('studentTypes') buttons: Button[];

  constructor(private eduPickerService: EduPickerService) { }

  selected(emitValue: string|number) {
    this.eduPickerService.onSelectedStudentType(emitValue);
  }
}
