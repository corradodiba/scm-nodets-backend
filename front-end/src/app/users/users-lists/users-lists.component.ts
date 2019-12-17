import { Component, OnInit } from "@angular/core";
import Student from "../user.model";
import { UsersListService } from "./users-list.service";

@Component({
  selector: "app-users-lists",
  templateUrl: "./users-lists.component.html",
  styleUrls: ["./users-lists.component.scss"]
})
export class UsersListsComponent implements OnInit {
  students: Student[] = [];

  constructor(private userService: UsersListService) {}

  async ngOnInit() {
    this.students = await this.userService.getStudents();
  }
}
