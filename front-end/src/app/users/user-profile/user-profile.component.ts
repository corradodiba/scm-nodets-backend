import { Component, OnInit, Input } from "@angular/core";

import User from "src/app/interfaces/user.model";

import { environment } from "../../../environments/environment";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"]
})
export class UserProfileComponent implements OnInit {
  @Input() user: User;
  defaultImage = environment.defaultImage;
  constructor() {}

  ngOnInit() {}
}
