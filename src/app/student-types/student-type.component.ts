import { Component, OnDestroy, OnInit } from "@angular/core";
import { Card } from "../shared/data/model/card.model";
import { Subscription } from "rxjs/Subscription";
import { StudentTypeService } from "./student-type.service";
import { TitleService } from "../shared/title.service";

@Component({
  selector: 'app-student-type',
  templateUrl: './student-type.component.html',
  styleUrls: ['./student-type.component.scss']
})
export class StudentTypeComponent implements OnInit, OnDestroy {
  cards: Card[];
  subscription: Subscription;

  constructor(private studentTypeService: StudentTypeService,
              private titleService: TitleService) { }

  ngOnInit() {
    this.titleService.setTitle('Elevtype');

    scrollTo(0, 0);
    this.studentTypeService.getCards();

    this.subscription = this.studentTypeService.entriesChanged
      .subscribe((entries: Card[]) => {
        this.cards = entries;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
