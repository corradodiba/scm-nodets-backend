import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { IList } from "../../interfaces/list.model";
import { CoursesService } from "../courses.service";
import Course from "../../interfaces/course.model";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-courses-list",
  templateUrl: "./courses-list.component.html",
  styleUrls: ["./courses-list.component.scss"]
})
export class CoursesListComponent implements OnInit {
  isHidden = true;
  courses: Course[] = [];
  @Output() showCourseById = new EventEmitter<{
    _id: string;
    action: string;
  }>();
  @Input() isNavigable = true;
  apiUrl = `${environment.coursesPath}`;

  constructor(private coursesService: CoursesService, private router: Router) { }

  async ngOnInit() {
    this.courses = await this.coursesService.getCourses();
  }

  mapCoursesListDetails() {
    const coursesMapped: IList[] = this.courses.map(course => {
      return {
        _id: course._id,
        title: `Corso ${course.year}`,
        description: "Catania",
        buttons: ["Show", "Delete", "Edit"]
      };
    });
    return coursesMapped;
  }

  onActionToCourse(action: { _id: string; action: string }) {
    this.isHidden = false;
    if (this.isNavigable) {
      this.router.navigate([`${this.apiUrl}/${action._id}`]);
    } else if (action.action === "Show") {
      this.showCourseById.emit(action); //BOH
    }
  }

}
