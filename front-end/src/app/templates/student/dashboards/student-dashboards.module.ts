import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentDashboardsComponent } from "./student-dashboards.component";

@NgModule({
  declarations: [StudentDashboardsComponent],
  imports: [CommonModule],
  exports: [StudentDashboardsComponent]
})
export class StudentDashboardsModule {}
