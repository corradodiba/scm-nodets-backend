import { Component, OnInit, Input } from "@angular/core";
import { CoursesService } from "src/app/pages/courses/courses.service";
import Course from "src/app/interfaces/course.model";

@Component({
  selector: "app-delete-modal",
  templateUrl: "./delete-modal.component.html",
  styleUrls: ["./delete-modal.component.scss"]
})
export class DeleteModalComponent implements OnInit {
  @Input() course: Course;
  @Input() modality = "Delete";
  @Input() courses: Course[] = undefined;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {}

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
