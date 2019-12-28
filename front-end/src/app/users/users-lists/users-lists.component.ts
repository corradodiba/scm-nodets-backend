import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { environment } from "src/environments/environment";

import { UsersService } from "../users.service";
import User from "src/app/interfaces/user.model";
import { IList } from "src/app/interfaces/list.model";

@Component({
  selector: "app-users-lists",
  templateUrl: "./users-lists.component.html",
  styleUrls: ["./users-lists.component.scss"]
})
export class UsersListsComponent implements OnInit {
  users: User[] = [];
  usersPath = `${environment.usersPath}`;

  constructor(private router: Router, private usersService: UsersService) {}

  async ngOnInit() {
    this.users = await this.usersService.getUsers();
  }

  mapUserListDetails() {
    const usersMapped: IList[] = this.users.map(user => {
      return {
        _id: user._id,
        title: user.name,
        subtitle: user.surname,
        description: user.fiscalCode,
        action: this.onShowUser
      };
    });
    return usersMapped;
  }

  onShowUser(id: string) {
    console.log("ciao");
    console.log(id);
    this.usersService.getUserById(id);
    this.router.navigate([`${this.usersPath}/${id}`]);
  }
}
