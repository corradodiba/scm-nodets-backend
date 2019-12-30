import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";

import { AuthService } from "../auth/auth.service";

import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { IToggleItem } from "../interfaces/toggle-item.model";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  usersPath = environment.usersPath;
  coursesPath = environment.coursesPath;
  loginPath = environment.loginPath;
  signupPath = environment.signupPath;

  private authListenerSubs = new Subscription();
  isAuthenticated = false;
  isDesktopScreen = false;
  isCollapsed = true;

  userId: string = undefined;

  toggleItems: IToggleItem[] = [];

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

  onClickToggle() {
    this.toggleItems = this.getMenuItems();
  }
  getPathUserId() {
    this.userId = this.authService.getAuthStatus().userId;
    if (this.userId === undefined) {
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

  private getUserId() {
    return this.authService.getAuthStatus()
      ? this.authService.getAuthStatus().userId
      : "";
  }

  private getMenuItems() {
    return [
      {
        matIcon: "account_circle",
        isVisible: this.isAuthenticated,
        text: "MyProfile",
        href: `/users/${this.getUserId()}`
      },
      {
        matIcon: "book",
        isVisible: this.isAuthenticated,
        text: "Courses",
        href: "/courses"
      },
      {
        matIcon: "supervisor_account",
        isVisible: this.isAuthenticated,
        text: "Users",
        href: "/users"
      },
      {
        matIcon: "assignment",
        isVisible: !this.isAuthenticated,
        text: "Signup",
        href: "/auth/signup"
      },
      {
        matIcon: "exit_to_app",
        isVisible: !this.isAuthenticated,
        text: "Login",
        href: "/auth/login"
      },
      {
        matIcon: "exit_to_app",
        isVisible: this.isAuthenticated,
        text: "Logout",
        href: undefined
      }
    ];
  }

  getDefaultItems(items: IToggleItem[]) {
    return items.map(item => {
      if (item.text === "Login" || item.text === "Signup") {
        item.isVisible = true;
      } else {
        item.isVisible = false;
      }
      console.log(item);
      return item;
    });
  }
}
