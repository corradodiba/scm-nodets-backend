import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { AuthService } from "../auth/auth.service";
import { CoursesService } from "../courses/courses.service";

import Course from "src/app/interfaces/course.model";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit, OnDestroy {
  private authListenerSubs = new Subscription();
  isAuthenticated = false;
  type = "Guest";
  constructor(private authService: AuthService) {}

  async ngOnInit() {
    this.isAuthenticated = this.authService.isAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      });
    if (this.isAuthenticated) {
      this.type = this.authService.getAuthStatus().type;
    }
    console.log(this.type);
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
