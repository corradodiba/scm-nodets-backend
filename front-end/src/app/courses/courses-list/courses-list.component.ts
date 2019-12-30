import { Component, OnInit } from "@angular/core";
import { IList } from "../../interfaces/list.model";
import { CoursesService } from "../courses.service";
import Course from "../../interfaces/course.model";

@Component({
  selector: "app-courses-list",
  templateUrl: "./courses-list.component.html",
  styleUrls: ["./courses-list.component.scss"]
})
export class CoursesListComponent implements OnInit {
  isHidden = true;
  courses: Course[] = [];
  course: Course;

  constructor(private coursesService: CoursesService) { }

  async ngOnInit() {
    this.courses = await this.coursesService.getCourses();
  }

  mapCoursesListDetails() {
    const coursesMapped: IList[] = this.courses.map(course => {
      return {
        _id: course._id,
        title: `Corso ${course.year}`,
        description: "Catania"
      };
    });
    return coursesMapped;
  }

  onShowCourse(id: string) {
    this.isHidden = false;
    this.course = this.courses.find((course) => {
      return course._id === id
    })
  }
  onShowList() {
    this.isHidden = true;
  }
}
