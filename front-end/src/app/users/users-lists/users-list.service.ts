import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import Student from "../user.model";

@Injectable({
  providedIn: "root"
})
export class UsersListService {
  apiURL =
    "http://stevejobs-class-managment.us-east-2.elasticbeanstalk.com/students";

  constructor(private httpClient: HttpClient) {}

  public getStudents(): Promise<Student[]> {
    return this.httpClient.get<Student[]>(`${this.apiURL}`).toPromise();
  }
}
