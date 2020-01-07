import { Component, OnInit, Input } from "@angular/core";
import { NgForm } from "@angular/forms";

import Course from "src/app/interfaces/course.model";

import { CoursesService } from "src/app/pages/courses/courses.service";

@Component({
  selector: "app-add-edit-modal",
  templateUrl: "./add-edit-modal.component.html",
  styleUrls: ["./add-edit-modal.component.scss"]
})
export class AddEditModalComponent implements OnInit {
  @Input() course: Course;
  @Input() modality = "View";

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {}

  async onCreateCourse(form: NgForm) {
    if (this.modality === "Edit") {
      for (const key in form.value) {
        if (form.value[key] !== "") {
          console.log(key, " => ", form.value[key]);
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
}
