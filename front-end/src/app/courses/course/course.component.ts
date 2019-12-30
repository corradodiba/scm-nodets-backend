import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import Course from "src/app/interfaces/course.model";
import { CoursesService } from "../courses.service";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.scss"]
})
export class CourseComponent implements OnInit {
  @Input() courseId: string;
  course: Course;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    if (this.courseId === undefined) {
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has("courseId")) {
          this.courseId = paramMap.get("courseId");
        }
      });
    }
    this.course = await this.coursesService.getCourseById(this.courseId);
  }
}
