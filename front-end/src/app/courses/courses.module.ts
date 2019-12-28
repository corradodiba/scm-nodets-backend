import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CourseComponent } from "./course/course.component";
import { CoursesListComponent } from "./courses-list/courses-list.component";

import { CoursesRoutingModule } from "../courses/courses-routing.module";
import { ListModule } from "../helpers/list/list.module";

@NgModule({
  declarations: [CoursesListComponent, CourseComponent, CoursesListComponent],
  imports: [CommonModule, CoursesRoutingModule, ListModule],
  exports: [CoursesListComponent]
})
export class CoursesModule {}
