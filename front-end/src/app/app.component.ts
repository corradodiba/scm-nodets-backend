import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { AuthService } from "./pages/auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  private authListenerSubs = new Subscription();
  isAuthenticated = false;
  constructor(private authService: AuthService) {}

  async ngOnInit() {
    this.authService.autoConfigAuthUser();
    this.isAuthenticated = this.authService.isAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      });
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
