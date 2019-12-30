import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatProgressSpinnerModule,
  MatCardModule,
  MatButtonModule,
  MatOptionModule,
  MatFormFieldModule,
  MatSelectModule
} from "@angular/material";

import { UsersRoutingModule } from "./users-routing.module";
import { UsersListsComponent } from "./users-lists/users-lists.component";
import { UserComponent } from "./user/user.component";
import { SubjectsComponent } from "../subjects/subjects.component";
import { ListModule } from "../helpers/list/list.module";
import { CoursesModule } from "../courses/courses.module";

@NgModule({
  declarations: [UsersListsComponent, UserComponent, SubjectsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    UsersRoutingModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    ListModule,
    CoursesModule
  ],
  exports: [UsersListsComponent, UserComponent]
})
export class UsersModule { }
