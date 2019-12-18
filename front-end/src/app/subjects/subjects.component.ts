import { Component, OnInit } from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatSnackBar } from "@angular/material";

import Subject from "../interfaces/subject.model";

import { SubjectsService } from "./subjects.service";

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.scss"]
})
export class SubjectsComponent implements OnInit {
  subjects: Subject[] = [];

  constructor(private subjectsService: SubjectsService) { }
  async ngOnInit() {
    this.subjects = await this.subjectsService.getSubjects();
  }
}
