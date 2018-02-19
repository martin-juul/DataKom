import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ErrorService {

  public static handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }


  public static handleHttpError(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      console.error('A client-side or network error occurred.', err.error);
    } else {
      console.error(`Backend returned code ${err.status}`, err.error);
    }
  }
}
