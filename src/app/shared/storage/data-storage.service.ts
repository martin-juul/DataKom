import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../environments/environment";
import { ErrorService } from "../error.service";

@Injectable()
export class DataStorageService {
  private api = `${environment.api}`;

  constructor(private http: HttpClient) { }

  get(endPoint: string, params?: Object) {

    return this.http.get(`${this.api}${endPoint}`,
      {
        observe: 'response'
      }).catch(ErrorService.handleError)
  }
}
