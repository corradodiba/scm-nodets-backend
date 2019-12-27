import { Component, OnInit } from "@angular/core";

import { environment } from "src/environments/environment";

import { UsersService } from "../users.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-users-lists",
  templateUrl: "./users-lists.component.html",
  styleUrls: ["./users-lists.component.scss"]
})
export class UsersListsComponent implements OnInit {
  users: any = [];
  usersPath = `${environment.usersPath}`;

  constructor(private router: Router, private usersService: UsersService) {}

  async ngOnInit() {
    this.users = await this.usersService.getUsers();
  }

  onShowUser(id: string) {
    this.usersService.getUserById(id);

    this.router.navigate([`${this.usersPath}/${id}`]);
  }
}
