import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Router } from "@angular/router";

import { CoursesService } from "../courses.service";

import { environment } from "src/environments/environment";

import { IListCardModel } from "src/app/interfaces/list-card.model";
import Course from "../../interfaces/course.model";
import { IList } from "../../interfaces/list.model";

@Component({
  selector: "app-courses-list",
  templateUrl: "./courses-list.component.html",
  styleUrls: ["./courses-list.component.scss"]
})
export class CoursesListComponent implements OnInit {
  @Output() showCourseById = new EventEmitter<{
    _id: string;
    action: string;
  }>();
  @Input() listTemplate: IListCardModel;
  @Input() isNavigable = true;

  apiUrl = `${environment.coursesPath}`;

  isHidden = true;
  courses: Course[] = [];

  constructor(private coursesService: CoursesService, private router: Router) {}

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

  async onActionToCourse(action: { _id: string; action: string }) {
    this.isHidden = false;
    if (this.isNavigable) {
      this.router.navigate([`${this.apiUrl}/${action._id}`]);
    } else if (action.action === "Show") {
      this.showCourseById.emit(action);
    } else if (action.action === "Delete") {
      await this.coursesService.deleteCourseById(action._id);
    }
  }
}
