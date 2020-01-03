import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TeacherDashboardsComponent } from "./teacher-dashboards.component";

import { SidenavModule } from 'src/app/shared/sidenav/sidenav.module';
import { ProfileNavbarModule } from 'src/app/shared/profile-navbar/profile-navbar.module';
import { HeaderNavModule } from 'src/app/components/header-nav/header-nav.module';
import { CardModule } from 'src/app/components/card/card.module';
import { SimpleListModule } from 'src/app/components/simple-list/simple-list.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';

@NgModule({
  declarations: [TeacherDashboardsComponent],
  imports: [
    CommonModule,
    SidenavModule,
    ProfileNavbarModule,
    HeaderNavModule,
    CardModule,
    SimpleListModule,
    FooterModule
  ],
  exports: [TeacherDashboardsComponent]
})
export class TeacherDashboardsModule {}
