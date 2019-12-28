import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { UsersListsComponent } from "./users-lists/users-lists.component";

const routes: Routes = [
  { path: ":id", component: UserComponent },
  { path: "", component: UsersListsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
