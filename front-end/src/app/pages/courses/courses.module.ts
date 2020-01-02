import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CourseComponent } from "./course/course.component";
import { CoursesListComponent } from "./courses-list/courses-list.component";

import { CoursesRoutingModule } from "../courses/courses-routing.module";

@NgModule({
  declarations: [CoursesListComponent, CourseComponent, CoursesListComponent],
  imports: [CommonModule, CoursesRoutingModule],
  exports: [CoursesListComponent, CourseComponent]
})
export class CoursesModule {}
