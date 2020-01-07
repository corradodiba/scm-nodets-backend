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
import { ISimpleList } from "src/app/interfaces/new/simple-list.model";

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

  subjectsSimpleList: ISimpleList;

  courses: Course[];
  students: User[];
  teachers: User[];
  subjects: Subject[];

  selectedCourse: Course;
  courseToModal: Course;
  courseModalMode = "Edit";

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
      this.selectedCourse = this.courses[0];
      this.coursesCard = this.getCoursesAssets(this.courses.length);
      this.studentsCard = this.getStudentAssets(this.students.length);
      this.teachersCard = this.getTeacherAssets(this.teachers.length);
      this.subjectsCard = this.getSubjectsAssets(this.subjects.length);
      this.subjectsSimpleList = this.getSubjectsSimpleListAssets(0);
    }
  }

  onCourseSelected(index: number) {
    this.subjectsSimpleList = this.getSubjectsSimpleListAssets(index);
    this.selectedCourse = this.courses[index];
  }

  onEditCourse(course: Course) {
    this.courseModalMode = "Edit";
    this.courseToModal = course;
  }
  onViewCourse(course: Course) {
    this.courseModalMode = "View";
    this.courseToModal = course;
  }
  async onDeleteCourse(course: Course) {
    this.courseModalMode = "Delete";
    this.courseToModal = course;
  }

  getCSSForCourseStatus(status: string) {
    return status === "pending"
      ? "bg-warning"
      : status === "complete"
      ? "bg-success"
      : "bg-danger";
  }

  getCoursesAssets(counter: number): ICard {
    return {
      title: "Courses",
      counter,
      textColor: "text-danger",
      icon: "ni-hat-3",
      background: "bg-gradient-danger"
    };
  }

  getStudentAssets(counter: number): ICard {
    return {
      title: "Students",
      counter,
      textColor: "text-info",
      icon: "ni-single-02",
      background: "bg-gradient-info"
    };
  }

  getTeacherAssets(counter: number): ICard {
    return {
      title: "Teachers",
      counter,
      textColor: "text-primary",
      icon: "ni-single-02",
      background: "bg-gradient-primary"
    };
  }

  getSubjectsAssets(counter: number): ICard {
    return {
      title: "Subjects",
      counter,
      textColor: "text-success",
      icon: "ni-ruler-pencil",
      background: "bg-gradient-success"
    };
  }

  getSubjectsSimpleListAssets(index: number) {
    const course = this.courses[index];
    return {
      title: "Subjects",
      subtitle: `${course.subjects.length} subjects into course ${course.name}`,
      items: course.subjects.map(subject => {
        return { avatar: `${subject.name.charAt(0)}`, text: subject.name };
      }),
      cover: "bg-success"
    };
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
