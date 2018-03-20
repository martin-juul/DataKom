import { Component, OnDestroy, OnInit } from '@angular/core';

import { HomeService } from './home.service';
import { Table } from '../shared/data/model/table.model';
import { Subscription } from 'rxjs/Subscription';
import { Button, EduPickerService, TableBeforeText } from '../@lib/widgets/edupicker/edu-picker.service';
import { TitleService } from '../shared/title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  semesters: Table[];
  tableBeforeText: TableBeforeText;
  eduPickerButtons: Button[];
  eduTypes: Button[];
  subscription: Subscription;

  educationId: number;
  studentTypeGroupId: number;

  constructor(private homeService: HomeService,
              private eduPickerService: EduPickerService,
              private titleService: TitleService) {
  }

  ngOnInit() {
    this.titleService.setTitle('Hjem');

    this.homeService
      .loadButtons()
      .subscribe(buttons => this.eduPickerButtons = buttons);

    this.tableBeforeText = this.homeService.tableBeforeText;

    this.subscription = this.homeService.entriesChanged
      .subscribe((entries: Table[]) => {
        this.semesters = entries;
      }).add(
        this.eduPickerService.selectedStudentType$
          .subscribe(
            clicked => {
              this.studentTypeGroupId = Number(clicked);
              this.homeService
                .getSemesters(this.educationId, this.studentTypeGroupId)
                .subscribe(data => this.semesters = data);
            }
          )
      ).add(
        this.eduPickerService.selectedEducation$
          .subscribe(
            clicked => {
              const eduId = Number(clicked);
              this.educationId = eduId;
              this.getStudentTypes(eduId);
            }
          )
      );
  }

  getStudentTypes(eduId: number) {
    // TODO: Restrict student types based on assigned groups.
    this.homeService
      .loadCards()
      .subscribe(cards => this.eduTypes = cards)
  }

  getSelectedSemesters() {
    this.homeService
      .getSemesters(this.educationId, this.studentTypeGroupId);
  }

  onSelected($event) {

  }

  onSelectedStudentType($event) {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
