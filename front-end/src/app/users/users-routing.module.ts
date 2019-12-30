import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { UsersListsComponent } from "./users-lists/users-lists.component";
import { IsAdminGuard } from '../auth/permissions/isAdmin.guard';

const routes: Routes = [
  { path: "", component: UsersListsComponent, canActivate: [IsAdminGuard] },
  { path: ":userId", component: UserComponent, canActivate: [IsAdminGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
