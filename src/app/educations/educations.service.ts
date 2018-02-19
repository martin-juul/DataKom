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
      .get(`widget/2`)
      .subscribe((data: Card[]) => {
        this.setEntries(data);
      })
  }

  getContent(slug: string) {
    this.dataStorageService
      .get('content/education/' + slug)
      .subscribe((data: Content) => {
        this.content = data;
      });
  }

  setEntries(entries: Card[]) {
    this.cardEntries = entries;
    this.entriesChanged.next(this.cardEntries.slice());
  }

}
