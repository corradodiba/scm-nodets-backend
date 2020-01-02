import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TeacherDashboardsComponent } from "./teacher-dashboards.component";

@NgModule({
  declarations: [TeacherDashboardsComponent],
  imports: [CommonModule],
  exports: [TeacherDashboardsComponent]
})
export class TeacherDashboardsModule {}
