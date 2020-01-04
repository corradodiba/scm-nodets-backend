import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import User from "src/app/interfaces/user.model";
import { AuthService } from "src/app/pages/auth/auth.service";
import { UsersService } from "src/app/pages/users/users.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-my-profile",
  templateUrl: "./admin-my-profile.component.html",
  styleUrls: ["./admin-my-profile.component.scss"]
})
export class AdminMyProfileComponent implements OnInit, OnDestroy {
  private authListenerSubs = new Subscription();
  isAuthenticated = false;

  editMode = false;

  userAuth: User;

  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  async ngOnInit() {
    this.isAuthenticated = this.authService.isAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      });
    if (this.isAuthenticated) {
      const { userId } = this.authService.getAuthStatus();
      this.userAuth = await this.usersService.getUserById(userId);
    }
  }

  onEditMode() {
    this.editMode = !this.editMode;
  }

  async onEditUser(form: NgForm) {
    const { userName, surname } = form.value;
    const updatedUser: User = await this.usersService.editUserById(
      this.userAuth._id,
      { name: userName, surname }
    );
    this.userAuth = updatedUser;
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
