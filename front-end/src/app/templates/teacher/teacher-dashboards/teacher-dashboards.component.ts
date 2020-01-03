import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import Course from "src/app/interfaces/course.model";
import { ISimpleList } from "src/app/interfaces/new/simple-list.model";

import { CoursesService } from "src/app/pages/courses/courses.service";
import { AuthService } from "src/app/pages/auth/auth.service";
@Component({
  selector: "app-teacher-dashboards",
  templateUrl: "./teacher-dashboards.component.html",
  styleUrls: ["./teacher-dashboards.component.scss"]
})
export class TeacherDashboardsComponent implements OnInit, OnDestroy {
  private authListenerSubs = new Subscription();
  isAuthenticated = false;

  subjectsSimpleList: ISimpleList;

  course: Course;

  constructor(
    private authService: AuthService,
    private coursesService: CoursesService
  ) {}

  async ngOnInit() {
    this.isAuthenticated = this.authService.isAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      });
    if (this.isAuthenticated) {
      this.course = await this.coursesService.getCourseById(
        "5e0e6fa9fa991b5764169042"
      );
      this.subjectsSimpleList = this.getSubjectsSimpleListAssets();
    }
  }

  getSubjectsSimpleListAssets() {
    return {
      title: "Subjects",
      subtitle: `${this.course.subjects.length} subjects into course ${this.course.name}`,
      items: this.course.subjects.map(subject => {
        return { avatar: `${subject.name.charAt(0)}`, text: subject.name };
      })
    };
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
