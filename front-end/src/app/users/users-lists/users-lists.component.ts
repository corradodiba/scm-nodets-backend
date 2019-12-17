import { Component, OnInit } from "@angular/core";

import { UsersListService } from "./users-list.service";
import { UsersService } from "../users.service";

import User from "../user.model";

@Component({
  selector: "app-users-lists",
  templateUrl: "./users-lists.component.html",
  styleUrls: ["./users-lists.component.scss"]
})
export class UsersListsComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UsersListService,
    private usersService: UsersService
  ) {}

  async ngOnInit() {
    this.users = await this.userService.getUsers();
  }

  onShowUser(id: string) {
    console.log(id);
    this.usersService.showUser(id);
  }
}
