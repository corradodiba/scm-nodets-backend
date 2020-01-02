import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomepageComponent } from "./homepage.component";
import { AdminDashboardsModule } from "src/app/templates/admin/dashboards/admin-dashboards.module";
import { SidenavModule } from "src/app/shared/sidenav/sidenav.module";
import { GuestHomepageModule } from "src/app/templates/guest/guest-homepage/guest-homepage.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminDashboardsModule,
    SidenavModule,
    GuestHomepageModule
  ],
  exports: [HomepageComponent]
})
export class HomepageModule {}
