import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { DataStorageService } from "../shared/storage/data-storage.service";
import { TableResponse } from "../shared/data/response/Response";
import { Table } from "../shared/data/model/table.model";
import { Subject } from "rxjs/Subject";
import { Button, TableBeforeText } from "../@lib/widgets/edupicker/edu-picker.service";

@Injectable()
export class HomeService {
  entriesChanged = new Subject<Table[]>();
  private semesterEntries: Table[] = [];
  public tableBeforeText: TableBeforeText = <TableBeforeText>{};

  constructor(private dataStorageService: DataStorageService) {
  }

  getSemesters(eduId: number) {
    // return this.dataStorageService.get(`semester/${eduId}/all`);

    this.dataStorageService
      /*.get<TableResponse>(`semester/${eduId}/all`)
      .subscribe(data => {
        this.setEntries(data.result);
      });*/
      .get(`semester/${eduId}/all`)
      .subscribe(data => {
        this.setEntries(data.tables, data.beforeText);
      });
  }

  getEduPickerSetup() {
    let buttons: Button[] = [];
    let beforeText: TableBeforeText = <TableBeforeText>{};
    this.dataStorageService.get(`widget/1`)
      .subscribe(res => {
        buttons = res.buttons.items;
        beforeText = res.beforeText;
      });
    return { buttons: buttons, beforeText: beforeText }
  }

  getEduPickerStudentTypes(id: number) {
    let eduTypes: Button[] = [];
    this.dataStorageService.get(`eduTypes/1`)
      .subscribe(res => {
        eduTypes = res.buttons
      });
    return eduTypes;
  }

  setEntries(entries: Table[], beforeText: TableBeforeText) {
    this.semesterEntries = entries;
    this.tableBeforeText = beforeText;
    this.entriesChanged.next(this.semesterEntries.slice());
  }

}
