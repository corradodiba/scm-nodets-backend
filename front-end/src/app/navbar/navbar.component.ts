import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";

import { AuthService } from "../auth/auth.service";

import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  usersPath = environment.usersPath;

  private authListenerSubs = new Subscription();
  isAuthenticated = false;
  isDesktopScreen = false;

  userId: string = undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
    public breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(["(min-width: 768px)"])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isDesktopScreen = true;
        } else {
          this.isDesktopScreen = false;
        }
      });

    this.isAuthenticated = this.authService.isAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      });
  }

  getUserId() {
    this.userId = this.authService.getAuthStatus().userId;
    if (this.userId === undefined) {
      this.router.navigate(["/"]);
      return;
    }

    return `${this.usersPath}/${this.userId}`;
  }

  onLogout() {
    this.authService.logoutUser();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
