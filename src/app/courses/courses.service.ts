import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoursesService {
  api = environment.api;

  constructor(private http: HttpClient) { }

  getCourseById(courseId: number) {
    return this.http.get(`${this.api}courses/${courseId}`);
  }
}
