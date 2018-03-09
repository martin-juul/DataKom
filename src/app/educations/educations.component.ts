import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

import { Card } from "../shared/data/model/card.model";
import { EducationsService } from "./educations.service";
import { TitleService } from "../shared/title.service";
@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent implements OnInit, OnDestroy {
  cards: Card[];
  subscription: Subscription;

  constructor(private educationsService: EducationsService,
              private titleService: TitleService) {
  }

  ngOnInit() {
    this.titleService.setTitle('Uddannelser');
    this.educationsService.getCards();

    this.subscription = this.educationsService.entriesChanged
      .subscribe((entries: Card[]) => {
        this.cards = entries;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
