import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { UsersService } from '../users.service';

import { environment } from 'src/environments/environment';

import User from 'src/app/interfaces/user.model';
import Course from 'src/app/interfaces/course.model';
import { IListCardModel } from 'src/app/interfaces/list-card.model';
import { CoursesService } from 'src/app/courses/courses.service';

@Component({
  selector: 'app-user',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  isHidden = true;
  userId: string = undefined;
  user: User;
  courseSelected: Course;
  listTemplate: IListCardModel = "innerBox";

  apiUrl = `${environment.usersPath}`;

  constructor(
    private usersService: UsersService,
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("userId")) {
        this.userId = paramMap.get("userId");
      }
    });
    this.user = await this.usersService.getUserById(this.userId);
  }

  async onActionToCourse(action: {_id: string; text: string}) {
    this.isHidden = false;
    if (action.text === "Show") {
      this.courseSelected = await this.coursesService.getCourseById(action._id);
    }
  }

  async onActionToUser(action: {_id: string; text: string}) {
    if (action.text === "Show") {
      this.user = await this.usersService.getUserById(action._id);
      this.router.navigate([`${this.apiUrl}/${action._id}`]);
    }
  }
}
