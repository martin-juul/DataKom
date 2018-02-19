import { Component, OnDestroy, OnInit } from '@angular/core';

import { HomeService } from "./home.service";
import { Table } from "../shared/data/model/table.model";
import { Subscription } from "rxjs/Subscription";
import { Button, EduPickerService, TableBeforeText } from "../@lib/widgets/edupicker/edu-picker.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  semesters: Table[];
  tableBeforeText: TableBeforeText;
  eduPickerButtons: Button[];
  subscription: Subscription;

  constructor(private homeService: HomeService,
              private eduPickerService: EduPickerService) { }

  ngOnInit() {
    this.subscription = this.homeService.entriesChanged
      .subscribe((entries: Table[]) => {
        this.semesters = entries;
      }).add(
        this.eduPickerService.selected$.subscribe(
          clicked => {
            this.onSelected(clicked)
          }
        )
      );

    this.getEduPickerSetup();
  }

  getSelectedSemesters(eduId: number) {
    this.homeService.getSemesters(eduId);
  }

  onSelected($event) {
    this.getSelectedSemesters($event);
  }

  getEduPickerSetup() {
    const setup = this.homeService.getEduPickerSetup();
    this.eduPickerButtons = setup.buttons;
    this.tableBeforeText = setup.beforeText;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
