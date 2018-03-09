import { Injectable } from "@angular/core";
import { DataStorageService } from "../shared/storage/data-storage.service";
import { Subject } from "rxjs/Subject";
import { Card } from "../shared/data/model/card.model";
import { Content } from "../shared/data/model/content.model";

@Injectable()
export class EducationsService {
  entriesChanged = new Subject<Card[]>();
  cardEntries: Card[];
  content: Content;

  constructor(private dataStorageService: DataStorageService) { }

  getCards() {
    this.dataStorageService
      .get('content/cards')
      .subscribe((data) => {
        this.setEntries(<Card[]>data.body);
      })
  }

  getContent(slug: string) {
    return this.dataStorageService
      .get('content/' + slug)
      .map((response) => response)
      .toPromise();
  }

  setEntries(entries: Card[]) {
    this.cardEntries = entries;
    this.entriesChanged.next(this.cardEntries.slice());
  }

}
