import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/pages/auth/auth.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent implements OnInit {
  type = "Guest";
  constructor(private authService: AuthService) {}

  async ngOnInit() {
    this.type = this.authService.getAuthStatus().type;
  }
}
