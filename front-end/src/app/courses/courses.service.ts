import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import Course from "../interfaces/course.model";

@Injectable({
  providedIn: "root"
})
export class CoursesService {
  apiURL = `${environment.apiUrl}/${environment.coursesPath}`;

  constructor(private httpClient: HttpClient) { }
  getCourses() {
    return this.httpClient.get<Course[]>(`${this.apiURL}`).toPromise();
  }

  getCourseById(courseId: string) {
    return this.httpClient
      .get<Course>(`${this.apiURL}/${courseId}`)
      .toPromise();
  }
}
