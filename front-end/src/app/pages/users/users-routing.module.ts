import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { IsAdminGuard } from "../auth/permissions/isAdmin.guard";
import { CustomPermission } from "../auth/permissions/custom-permission.guard";

const routes: Routes = [
  { path: "", component: UsersListComponent, canActivate: [IsAdminGuard] },
  {
    path: ":userId",
    component: UserComponent,
    canActivate: [CustomPermission],
    data: {
      guards: ["Admin", "Student", "Teacher"]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
