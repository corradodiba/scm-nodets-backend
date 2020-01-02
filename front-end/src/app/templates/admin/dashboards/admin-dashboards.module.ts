import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminDashboardsComponent } from "./admin-dashboards.component";

import { SidenavModule } from "src/app/shared/sidenav/sidenav.module";
import { ProfileNavbarModule } from "src/app/shared/profile-navbar/profile-navbar.module";
import { HeaderNavModule } from "src/app/components/header-nav/header-nav.module";
import { CardModule } from "src/app/components/card/card.module";
import { TableSortableModule } from "src/app/components/table-sortable/table-sortable.module";
import { SimpleListModule } from "src/app/components/simple-list/simple-list.module";
import { FooterModule } from "src/app/shared/footer/footer.module";

@NgModule({
  declarations: [AdminDashboardsComponent],
  imports: [
    CommonModule,
    SidenavModule,
    ProfileNavbarModule,
    HeaderNavModule,
    CardModule,
    TableSortableModule,
    SimpleListModule,
    FooterModule
  ],
  exports: [AdminDashboardsComponent]
})
export class AdminDashboardsModule {}
