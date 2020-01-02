import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { UsersListsComponent } from "./users-lists/users-lists.component";
import { AdminComponent } from "./admin/admin.component";
import { SubjectsComponent } from "../subjects/subjects.component";
import { ListModule } from "../helpers/list/list.module";
import { CoursesModule } from "../courses/courses.module";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { TeachersComponent } from './teachers/teachers.component';

@NgModule({
  declarations: [
    UsersListsComponent,
    AdminComponent,
    SubjectsComponent,
    UserProfileComponent,
    TeachersComponent
  ],
  imports: [CommonModule, UsersRoutingModule, ListModule, CoursesModule],
  exports: [UsersListsComponent, AdminComponent, UserProfileComponent]
})
export class UsersModule {}
