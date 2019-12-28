import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import Course from '../interfaces/course.model';

@Injectable({
  providedIn: "root"
})
export class CoursesService {
  apiURL = `${environment.apiUrl}`;
  coursesPath = `${environment.coursesPath}`;

  constructor(private httpClient: HttpClient) { }
  getCourses() {
    return this.httpClient.get<Course[]>(`${this.apiURL}/${this.coursesPath}`).toPromise();
  }
}
