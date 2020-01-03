import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { HomepageComponent } from "./homepage.component";

import { AdminDashboardsModule } from "src/app/templates/admin/dashboards/admin-dashboards.module";
import { SidenavModule } from "src/app/shared/sidenav/sidenav.module";
import { GuestHomepageModule } from "src/app/templates/guest/guest-homepage/guest-homepage.module";
import { StudentDashboardsModule } from "src/app/templates/student/dashboards/student-dashboards.module";
import { TeacherDashboardsModule } from "src/app/templates/teacher/teacher-dashboards/teacher-dashboards.module";

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminDashboardsModule,
    StudentDashboardsModule,
    TeacherDashboardsModule,
    SidenavModule,
    GuestHomepageModule
  ],
  exports: [HomepageComponent]
})
export class HomepageModule {}
