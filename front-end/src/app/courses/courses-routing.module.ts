import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CoursesListComponent } from "./courses-list/courses-list.component";

const routes: Routes = [{ path: "", component: CoursesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
