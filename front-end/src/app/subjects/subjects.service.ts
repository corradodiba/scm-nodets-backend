import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subjects } from './subjects.component';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private httpClient: HttpClient) { }
  apiURL: string = `http://stevejobs-class-managment.us-east-2.elasticbeanstalk.com/`;

  public getSubjects() {
    return this.httpClient.get<Subjects[]>(`${this.apiURL}subjects`).toPromise();
  }
}
