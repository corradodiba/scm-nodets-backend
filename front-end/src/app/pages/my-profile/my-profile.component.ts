import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.component.html",
  styleUrls: ["./my-profile.component.scss"]
})
export class MyProfileComponent implements OnInit, OnDestroy {
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
      const { type } = this.authService.getAuthStatus();
      this.type = type;
    }
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
