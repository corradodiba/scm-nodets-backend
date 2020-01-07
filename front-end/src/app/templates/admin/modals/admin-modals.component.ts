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
  @Input() modality = "View";
  @Input() courses: Course[] = undefined;

  constructor(private coursesService: CoursesService, private router: Router) {}

  ngOnInit() {}

  async onCreateCourse(form: NgForm) {
    if (this.modality === "Edit") {
      for (const key in form.value) {
        if (form.value[key] !== "") {
          if (key === "courseName") {
            // tslint:disable-next-line: no-string-literal
            this.course["name"] = form.value[key];
          }
          this.course[key] = form.value[key];
        }
      }
      this.course = await this.coursesService.editCourse(this.course._id, {
        name: this.course.name,
        year: this.course.year,
        status: this.course.status
      });
    }
    if (this.modality === "Add") {
      const { courseName, year, status } = form.value;
      this.course = await this.coursesService.addCourse({
        name: courseName,
        year,
        status
      });
    }
  }

  async onDeleteCourse() {
    await this.coursesService.deleteCourseById(this.course._id);
    if (this.courses) {
      this.courses.find((course, index) => {
        if (course === this.course) {
          this.courses.splice(index, 1);
        }
      });
    }
  }
}
