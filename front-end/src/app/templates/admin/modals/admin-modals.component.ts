import { Component, OnInit, Input } from "@angular/core";
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
  @Input() course: Course;
  @Input() isEditMode = true;

  constructor(private coursesService: CoursesService, private router: Router) {}

  ngOnInit() {}

  async onCreateCourse(form: NgForm) {
    const { courseName, year, status } = form.value;
    if (!this.course && this.isEditMode) {
      this.course = await this.coursesService.addCourse({
        name: courseName,
        year,
        status
      });
    }
    if (this.course && this.isEditMode) {
      this.course = await this.coursesService.editCourse(this.course._id, {
        name: courseName,
        year: new Date(year).toISOString(),
        status
      });
      console.log(this.course);
    }
  }
}
