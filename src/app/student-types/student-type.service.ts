import { Injectable } from "@angular/core";
import { DataStorageService } from "../shared/storage/data-storage.service";
import { Subject } from "rxjs/Subject";
import { Card } from "../shared/data/model/card.model";

@Injectable()
export class StudentTypeService {
  entriesChanged = new Subject<Card[]>();
  cardEntries: Card[];

  constructor(private dataStorageService: DataStorageService) { }

  getCards() {
    this.dataStorageService
      .get(`widget/3`)
      .subscribe((data: Card[]) => {
        this.setEntries(data);
      })
  }

  setEntries(entries: Card[]) {
    this.cardEntries = entries;
    this.entriesChanged.next(this.cardEntries.slice());
  }

}
