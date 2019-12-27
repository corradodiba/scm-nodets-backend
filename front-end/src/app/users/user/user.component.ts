import { Component, OnInit } from "@angular/core";
import { ParamMap, ActivatedRoute } from "@angular/router";

import { UsersService } from "../users.service";

import User from "../../interfaces/user.model";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  private userId: string = undefined;
  user: User;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("userId")) {
        this.userId = paramMap.get("userId");
      }
    });
    this.user = await this.usersService.getUserById(this.userId);
  }
}
