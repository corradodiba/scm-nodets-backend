import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

import User from "src/app/interfaces/user.model";

import { Subscription } from "rxjs";
import { AuthService } from "src/app/pages/auth/auth.service";
import { UsersService } from "src/app/pages/users/users.service";

@Component({
  selector: "app-profile-navbar",
  templateUrl: "./profile-navbar.component.html",
  styleUrls: ["./profile-navbar.component.scss"]
})
export class ProfileNavbarComponent implements OnInit, OnDestroy {
  private authListenerSubs = new Subscription();
  isAuthenticated = false;

  userLogged: User = undefined;
  userId: string = undefined;

  constructor(
    private router: Router,
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
      this.userId = this.authService.getAuthStatus().userId;
      this.userLogged = await this.usersService.getUserById(this.userId);
    }
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  onLogout() {
    this.authService.logoutUser();
  }

  onShowProfile() {
    this.router.navigate([`profile`]);
  }
}
