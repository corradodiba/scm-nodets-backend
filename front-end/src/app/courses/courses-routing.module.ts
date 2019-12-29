import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CoursesListComponent } from "./courses-list/courses-list.component";
import { IsAdminGuard } from "../auth/permissions/isAdmin.guard";

const routes: Routes = [
  { path: "", component: CoursesListComponent, canActivate: [IsAdminGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
