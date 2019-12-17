import { Component, OnInit } from "@angular/core";

import { UsersListService } from "./users-list.service";

import User from "../user.model";

@Component({
  selector: "app-users-lists",
  templateUrl: "./users-lists.component.html",
  styleUrls: ["./users-lists.component.scss"]
})
export class UsersListsComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UsersListService) {}

  async ngOnInit() {
    this.users = await this.userService.getUsers();
  }
}
