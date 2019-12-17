import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Student } from '../../../../../back-end/src/models/student/student.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: string = 'http://stevejobs-class-managment.us-east-2.elasticbeanstalk.com/students';

  constructor(private httpClient: HttpClient) { }

  public getStudents() : Promise<Student[]> {
    return this.httpClient.get<Student[]>(`${this.apiURL}`).toPromise();
  }
}
