import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";

import Subject from "./subject.model";

@Injectable({
  providedIn: "root"
})
export class SubjectsService {
  constructor(private httpClient: HttpClient) {}
  apiURL = `${environment.apiUrl}${environment.subjectsPath}`;

  getSubjects() {
    return this.httpClient.get<Subject[]>(`${this.apiURL}`).toPromise();
  }
}
