import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../environments/environment";

import Subject from "../../interfaces/subject.model";

@Injectable({
  providedIn: "root"
})
export class SubjectsService {
  constructor(private httpClient: HttpClient) {}
  apiURL = `${environment.apiUrl}`;
  usersPath = `${environment.usersPath}`;
  subjectsPath = `${environment.subjectsPath}`;

  getSubjects() {
    const subjectsApiPath = `${this.apiURL}/${this.subjectsPath}`;
    return this.httpClient.get<Subject[]>(subjectsApiPath).toPromise();
  }
  getSubjectsById(id: string) {
    return this.httpClient
      .get<Subject[]>(
        `${this.apiURL}/${this.usersPath}/${id}/${this.subjectsPath}`
      )
      .toPromise();
  }
}
