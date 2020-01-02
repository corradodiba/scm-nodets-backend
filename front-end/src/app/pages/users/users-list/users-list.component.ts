import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

import { environment } from "src/environments/environment";

import { UsersService } from "../users.service";

import User from "src/app/interfaces/user.model";
import { IList } from "src/app/interfaces/list.model";
import { IListCardModel } from "src/app/interfaces/list-card.model";
import { ActionButton } from "src/app/interfaces/action-button.model";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {
  isHidden = true;
  users: User[] = [];
  usersPath = `${environment.usersPath}`;
  @Output() showUserById = new EventEmitter<ActionButton>();
  @Input() isNavigable = true;
  @Input() listTemplate: IListCardModel;

  constructor(private usersService: UsersService, private router: Router) {}

  async ngOnInit() {
    this.users = await this.usersService.getUsers();
    if (!this.listTemplate) {
      this.listTemplate = "fullwidth";
    }
  }

  mapUserListDetails() {
    const usersMapped: IList[] = this.users.map(user => {
      return {
        _id: user._id,
        title: `${user.name} ${user.surname}`,
        description: user.fiscalCode,
        buttons: [
          {
            text: "Show",
            color: "primary"
          },
          {
            text: "Delete",
            color: "danger"
          }
        ]
      };
    });
    return usersMapped;
  }

  async onActionToUser(action: ActionButton) {
    console.log(action);
    if (this.isNavigable) {
      this.router.navigate([`/${this.usersPath}/${action._id}`]);
    } else if (action.text === "Show") {
      this.showUserById.emit(action);
    } else if (action.text === "Delete") {
      this.users.map((user, index) => {
        if (user._id === action._id) {
          this.users.splice(index, 1);
        }
      });
      await this.usersService.deleteUserById(action._id);
    }
  }
}
