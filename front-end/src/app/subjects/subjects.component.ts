import { Component, OnInit } from "@angular/core";

import Subject from "../interfaces/subject.model";

import { SubjectsService } from "./subjects.service";
import { ParamMap, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.scss"]
})
export class SubjectsComponent implements OnInit {
  subjects: Subject[] = [];
  userId: string;

  constructor(
    private subjectsService: SubjectsService,
    private route: ActivatedRoute
  ) {}
  async ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("userId")) {
        this.userId = paramMap.get("userId");
      }
    });
    this.subjects = await this.subjectsService.getSubjectsById(this.userId);
    console.log(this.subjects);
  }
}
