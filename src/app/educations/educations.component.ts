import { Component, OnDestroy, OnInit } from "@angular/core";
import { Card } from "../shared/data/model/card.model";
import { Subscription } from "rxjs/Subscription";
import { EducationsService } from "./educations.service";

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent implements OnInit, OnDestroy {
  cards: Card[];
  subscription: Subscription;

  constructor(private educationsService: EducationsService) { }

  ngOnInit() {
    this.educationsService.getCards();

    /*this.subscription = this.educationsService.entriesChanged
      .subscribe((entries: Card[]) => {
        this.cards = entries;
      });*/

    this.cards = this.educationsService.cardEntries;
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
