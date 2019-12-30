import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
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
  isHidden = true;
  users: User[] = [];
  usersPath = `${environment.usersPath}`;
  @Output() showUserById = new EventEmitter<{
    _id: string;
    action: string;
  }>();
  @Input() isNavigable = true;

  constructor(private usersService: UsersService, private router: Router) { }

  async ngOnInit() {
    this.users = await this.usersService.getUsers();
  }

  mapUserListDetails() {
    const usersMapped: IList[] = this.users.map(user => {
      return {
        _id: user._id,
        title: `${user.name} ${user.surname}`,
        description: user.fiscalCode,
        buttons: ["Show", "Delete", "Edit"]
      };
    });
    return usersMapped;
  }

  async onActionToUser(action: { _id: string; action: string }) {
    if (action.action === "Show") {
      this.router.navigate([`/${this.usersPath}/${action._id}`]);
    } else if (action.action === "Delete") {
      await this.usersService.deleteUserById(action._id);
    }
  }
}
