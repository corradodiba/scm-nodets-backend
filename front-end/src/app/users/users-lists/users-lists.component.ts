import { Component, OnInit } from "@angular/core";
import User from "../user.model";
import { UsersListService } from "./users-list.service";

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
