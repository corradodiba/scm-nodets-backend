import { Component, OnInit } from "@angular/core";
import { CoursesService } from "src/app/pages/courses/courses.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import Course from "src/app/interfaces/course.model";

@Component({
  selector: "app-admin-modals",
  templateUrl: "./admin-modals.component.html",
  styleUrls: ["./admin-modals.component.scss"]
})
export class AdminModalsComponent implements OnInit {
  addedCourse: Course;
  constructor(private coursesService: CoursesService, private router: Router) {}

  ngOnInit() {}

  async onCreateCourse(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { courseName, year, status } = form.value;
    console.log(form.value);
    this.addedCourse = await this.coursesService.addCourse({
      name: courseName,
      year,
      status
    });
    this.router.navigate([""]);
  }
}
