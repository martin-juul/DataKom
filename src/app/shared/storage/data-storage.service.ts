import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../environments/environment";
import { ErrorService } from "../error.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

@Injectable()
export class DataStorageService {
  private api = `${environment}`;

  constructor(private http: HttpClient) { }

  /*get(endPoint: string) {
    return this.http.get<T>(`${this.api}${endPoint}`,
      {
        observe: 'response'
      }).catch(ErrorService.handleError)
  }*/

  /*
  * Only for testing before we implement the api.
  */
  get(endPoint: string): Observable<any> {
    /*const start = 0;
    return Observable.of(start);*/


    if (endPoint === 'semester/3/all') {
      const data = require('../data/json/semester-tables.json');
      return Observable.of(data)
    }
    if (endPoint === 'widget/1') {
      const data = require('../data/json/home-edu-picker.json');
      return Observable.of(data);
    }
    if (endPoint === 'widget/2') {
      const data = require('../data/json/edu/types.json');
      return Observable.of(data);
    }
    if (endPoint === 'widget/3') {
      const data = require('../data/json/studentType.json');
      return Observable.of(data);
    }
    // These are going to be: api/content/contentGuid
    if (endPoint === 'content/education/it-supporter') {
      const data = require('../data/json/edu/items/it-supporter.json');
      return Observable.of(data);
    }
    if (endPoint === 'content/education/datatekniker-infrastruktur') {
      const data = require('../data/json/edu/items/datatekniker-infrastruktur.json');
      return Observable.of(data);
    }
    if (endPoint === 'content/education/datatekniker-programmering') {
      const data = require('../data/json/edu/items/datatekniker-programmering.json');
      return Observable.of(data);
    }

  }
}
