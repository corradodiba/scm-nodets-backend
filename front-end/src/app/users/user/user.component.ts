import { Component, OnInit } from "@angular/core";

import { UserService } from "./user.service";
import User from "../user.model";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {}

  async ngOnInit() {
    this.user = await this.userService.getUserById("5ddd72a4501cc403f43bf61d");
  }
}
