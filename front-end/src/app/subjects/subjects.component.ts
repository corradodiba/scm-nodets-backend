import { Component, OnInit } from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatSnackBar } from "@angular/material";

import Subject from "./subject.model";

import { SubjectsService } from "./subjects.service";

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.scss"]
})
export class SubjectsComponent {
  subjects: Subject[] = [];

  constructor(private subjectsService: SubjectsService) { }
  async ngOnInit() {
    this.subjects = await this.subjectsService.getSubjects();
  }
}
