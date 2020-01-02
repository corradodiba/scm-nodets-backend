import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { ICard } from "src/app/interfaces/card.model";
import Course from "src/app/interfaces/course.model";
import User from "src/app/interfaces/user.model";
import Subject from "src/app/interfaces/subject.model";

import { CoursesService } from "src/app/pages/courses/courses.service";
import { UsersService } from "src/app/pages/users/users.service";
import { AuthService } from "src/app/pages/auth/auth.service";
import { SubjectsService } from "src/app/pages/subjects/subjects.service";

@Component({
  selector: "app-admin-dashboards",
  templateUrl: "./admin-dashboards.component.html",
  styleUrls: ["./admin-dashboards.component.scss"]
})
export class AdminDashboardsComponent implements OnInit {
  private authListenerSubs = new Subscription();
  isAuthenticated = false;

  coursesCard: ICard;
  usersCard: ICard;
  subjectsCard: ICard;

  courses: Course[];
  users: User[];
  subjects: Subject[];

  loggedUser: User;

  constructor(
    private coursesService: CoursesService,
    private usersService: UsersService,
    private authService: AuthService,
    private subjectsService: SubjectsService
  ) {}

  async ngOnInit() {
    this.isAuthenticated = this.authService.isAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      });
    if (this.isAuthenticated) {
      const [courses, users, subjects] = await Promise.all([
        this.coursesService.getCourses(),
        this.usersService.getUsers(),
        this.subjectsService.getSubjects()
      ]);

      this.courses = courses;
      this.users = users;
      this.subjects = subjects;

      this.coursesCard = this.getCoursesAssets(this.courses.length);
      this.usersCard = this.getUsersAssets(this.users.length);
      this.subjectsCard = this.getSubjectsAssets(this.subjects.length);
    }
  }

  getCoursesAssets(counter: number): ICard {
    return {
      title: "Courses",
      counter,
      actions: [
        {
          href: "#",
          text: "Add Course"
        },
        {
          href: "#",
          text: "Add User Into This Course"
        }
      ],
      background: "bg-gradient-danger"
    };
  }

  getUsersAssets(counter: number): ICard {
    return {
      title: "Users",
      counter,
      actions: [
        {
          href: "#",
          text: "Add User"
        }
      ],
      background: "bg-gradient-info"
    };
  }

  getSubjectsAssets(counter: number): ICard {
    return {
      title: "Subjects",
      counter,
      actions: [
        {
          href: "#",
          text: "Add Subject"
        }
      ],
      background: "bg-gradient-success"
    };
  }
}
