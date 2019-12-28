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
import { ListComponent } from "../helpers/list/list.component";
import { SubjectsComponent } from "../subjects/subjects.component";

@NgModule({
  declarations: [
    UsersListsComponent,
    UserComponent,
    ListComponent,
    SubjectsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    UsersRoutingModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class UsersModule {}
