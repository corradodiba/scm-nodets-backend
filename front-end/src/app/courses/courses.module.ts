import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoursesRoutingModule } from "./courses-routing.module";
import { CoursesComponent } from "./courses.component";
import { ListModule } from "../helpers/list/list.module";

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, CoursesRoutingModule, ListModule]
})
export class CoursesModule {}
