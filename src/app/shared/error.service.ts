import { Injectable } from "@angular/core";

@Injectable()
export class ErrorService {

  public static handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
