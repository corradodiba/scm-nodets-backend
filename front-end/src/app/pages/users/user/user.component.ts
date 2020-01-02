import { Component, OnInit } from "@angular/core";
import { ParamMap, ActivatedRoute, Router } from "@angular/router";

import { UsersService } from "../users.service";

import { environment } from "src/environments/environment";

import User from "../../../interfaces/user.model";
import { CoursesService } from "../../courses/courses.service";
import Course from "src/app/interfaces/course.model";
import { IListCardModel } from "src/app/interfaces/list-card.model";

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
  listTemplate: IListCardModel = "innerBox";

  apiUrl = `${environment.usersPath}`;

  constructor(
    private usersService: UsersService,
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("userId")) {
        this.userId = paramMap.get("userId");
      }
    });
    this.user = await this.usersService.getUserById(this.userId);
  }

  async onActionToCourse(action: { _id: string; text: string }) {
    this.isHidden = false;
    if (action.text === "Show") {
      this.courseSelected = await this.coursesService.getCourseById(action._id);
    }
  }
  async onActionToUser(action: { _id: string; text: string }) {
    if (action.text === "Show") {
      this.user = await this.usersService.getUserById(action._id);
      this.router.navigate([`${this.apiUrl}/${action._id}`]);
    }
  }
}
