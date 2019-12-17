import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { Student } from '../../../../../back-end/src/models/student/student.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  students: Student[] = [];

  constructor(private userService: UserService) { }

  async ngOnInit() {
    this.students = await this.userService.getStudents();
  }

}
