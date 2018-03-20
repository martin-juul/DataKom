import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../environments/environment";
import { ErrorService } from "../error.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

@Injectable()
export class DataStorageService {
  private api = `${environment.api}`;

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
  get(endPoint: string, params?: Object) {

    return this.http.get(`${this.api}${endPoint}`,
      {
        observe: 'response'
      }).catch(ErrorService.handleError)
  }
}
