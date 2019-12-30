import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CoursesListComponent } from "./courses-list/courses-list.component";
import { IsAdminGuard } from "../auth/permissions/isAdmin.guard";
import { CourseComponent } from "./course/course.component";

const routes: Routes = [
  { path: "", component: CoursesListComponent, canActivate: [IsAdminGuard] },
  { path: ":courseId", component: CourseComponent, canActivate: [IsAdminGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
