import { Component, OnDestroy, OnInit } from "@angular/core";
import { Card } from "../shared/data/model/card.model";
import { Subscription } from "rxjs/Subscription";
import { StudentTypeService } from "./student-type.service";

@Component({
  selector: 'app-student-type',
  templateUrl: './student-type.component.html',
  styleUrls: ['./student-type.component.scss']
})
export class StudentTypeComponent implements OnInit, OnDestroy {
  cards: Card[];
  subscription: Subscription;

  constructor(private studentTypeService: StudentTypeService) { }

  ngOnInit() {
    scrollTo(0, 0);
    this.studentTypeService.getCards();

    /*this.subscription = this.educationsService.entriesChanged
      .subscribe((entries: Card[]) => {
        this.cards = entries;
      });*/

    this.cards = this.studentTypeService.cardEntries;
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
