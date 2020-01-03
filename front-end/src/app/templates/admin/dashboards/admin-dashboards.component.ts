import { Component, OnInit, OnDestroy } from "@angular/core";
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
export class AdminDashboardsComponent implements OnInit, OnDestroy {
  private authListenerSubs = new Subscription();
  isAuthenticated = false;

  coursesCard: ICard;
  studentsCard: ICard;
  teachersCard: ICard;
  subjectsCard: ICard;

  courses: Course[];
  students: User[];
  teachers: User[];
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
      const [courses, students, teachers, subjects] = await Promise.all([
        this.coursesService.getCourses(),
        this.usersService.getUsersByType("Student"),
        this.usersService.getUsersByType("Teacher"),
        this.subjectsService.getSubjects()
      ]);
      this.courses = courses;
      this.students = students;
      this.teachers = teachers;
      this.subjects = subjects;

      this.coursesCard = this.getCoursesAssets(this.courses.length);
      this.studentsCard = this.getStudentAssets(this.students.length);
      this.teachersCard = this.getTeacherAssets(this.courses.length);
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

  getStudentAssets(counter: number): ICard {
    return {
      title: "Students",
      counter,
      actions: [
        {
          href: "#",
          text: "Add Student"
        }
      ],
      background: "bg-gradient-info"
    };
  }

  getTeacherAssets(counter: number): ICard {
    return {
      title: "Teachers",
      counter,
      actions: [
        {
          href: "#",
          text: "Add Teacher"
        }
      ],
      background: "bg-gradient-primary"
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

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
