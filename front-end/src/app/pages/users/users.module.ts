import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { UsersListComponent } from "./users-list/users-list.component";
import { UserComponent } from "./user/user.component";
import { SubjectsComponent } from "../subjects/subjects.component";
import { CoursesModule } from "../courses/courses.module";

@NgModule({
  declarations: [UsersListComponent, UserComponent, SubjectsComponent],
  imports: [CommonModule, UsersRoutingModule, CoursesModule],
  exports: [UsersListComponent, UserComponent]
})
export class UsersModule {}
