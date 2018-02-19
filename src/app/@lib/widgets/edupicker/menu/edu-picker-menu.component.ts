import { Component, Input } from "@angular/core";
import { Button, EduPickerService } from "../edu-picker.service";

@Component({
  selector: 'app-edu-picker-menu',
  templateUrl: './edu-picker-menu.component.html',
  styleUrls: ['edu-picker-menu.component.scss']
})
export class EduPickerMenuComponent {
  @Input() buttons: Button[];

  constructor(private eduPickerService: EduPickerService) { }

  selected(emitValue: string|number) {
    this.eduPickerService.onSelected(emitValue);
  }
}
