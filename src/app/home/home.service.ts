import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DataStorageService } from '../shared/storage/data-storage.service';
import { Table, TableSemesterAcoordion } from '../shared/data/model/table.model';
import { Subject } from 'rxjs/Subject';
import { Button, TableBeforeText } from '../@lib/widgets/edupicker/edu-picker.service';
import { ButtonRaw } from '../shared/data/response/button-raw.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StudentType } from '../shared/data/model/student-type.model';
import { SemesterRaw } from '../shared/data/response/semester-raw.model';

@Injectable()
export class HomeService {
  private api = environment.api;
  entriesChanged = new Subject<Table[]>();
  private semesterEntries: Table[] = [];
  public tableBeforeText: TableBeforeText = <TableBeforeText>{
    'title': 'Vælg en uddannelse',
    'subtitle': 'så præsenterer vi hovedforløbene.'
  };

  constructor(private dataStorageService: DataStorageService,
              private http: HttpClient) {
  }

  getSemesters(eduId: number, groupId: number): Observable<Table[]> {
    return this.http
      .get<SemesterRaw[]>(`${this.api}semesters/${groupId}/${eduId}`)
      .map(raws => this.provideSemesterTableFrom(raws))
  }

  loadButtons(): Observable<Button[]> {
    return this.http
      .get<ButtonRaw[]>(`${this.api}educations?filter=id.short_name`)
      .map(raws => this.provideButtonsFrom(raws));
  }

  loadCards(): Observable<any> {
    return this.http
      .get<StudentType[]>(`${this.api}studentTypes?filter=id.name.student_type_group_id`)
      .map(raws => this.provideCardsFrom(raws));
  }

  provideButtonsFrom(raws: ButtonRaw[]): Button[] {
    return raws.map(raw => new Button(
      raw.short_name,
      raw.id
    ));
  }

  provideCardsFrom(raws: CardRaw[]): Button[] {
    return raws.map(raw => new Button(
      raw.name,
      raw.student_type_group_id
    ));
  }

  provideSemesterTableFrom(raws: SemesterRaw[]) {
    let semesters: Table[] = [];

    for (let semester of raws) {
      let totalWeeks = 0;

      semesters.push({
        title: `Hovedforløb ${ semester.semester }`,
        caption: `Oversigt over Hovedforløb ${ semester.semester }`,
        headings: ['Fag nr.', 'Titel', 'Antal uger'],
        columns: semester.courses.map(col => {
          if (col.length) {
            totalWeeks += parseFloat(col.length.replace(/[,]/g,'.'));
          }
          if(col.course_no < 20) {
            col.course_no = null;
          }
          return [col.course_no, col.name, col.length]
        }),
        footers: ['', '', `Total ${totalWeeks}`],
        accordions: semester.courses.map(col => [new TableSemesterAcoordion(
          col.course_no, col.name, col.length, col.school_attendance_desc, col.internship_desc)]),
      });
    }

    return semesters;
  }
}

interface CardRaw {
  id?: number;
  name?: string;
  student_type_group_id?: number;
}
