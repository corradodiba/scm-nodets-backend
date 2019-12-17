import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersListsComponent } from "./users/users-lists/users-lists.component";
import { UserComponent } from "./users/user/user.component";

const routes: Routes = [
  { path: "", component: UsersListsComponent },
  { path: ":userId", component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
