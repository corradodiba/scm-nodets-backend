import { Component, OnInit } from "@angular/core";
import { ParamMap, ActivatedRoute } from "@angular/router";

import { UsersService } from "../users.service";

import User from "../../interfaces/user.model";
import { CoursesService } from "src/app/courses/courses.service";
import Course from "src/app/interfaces/course.model";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  isHidden = true;
  userId: string = undefined;
  user: User;
  courseSelected: Course;

  constructor(
    private usersService: UsersService,
    private coursesService: CoursesService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("userId")) {
        this.userId = paramMap.get("userId");
      }
    });
    this.user = await this.usersService.getUserById(this.userId);
  }

  async onActionToCourse(action: { _id: string; action: string }) {
    this.isHidden = false;
    if (action.action === "Show") {
      this.courseSelected = await this.coursesService.getCourseById(action._id);
    }
  }
}
