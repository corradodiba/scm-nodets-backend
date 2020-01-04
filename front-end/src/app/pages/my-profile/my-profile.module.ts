import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MyProfileComponent } from "./my-profile.component";

import { SidenavModule } from "src/app/shared/sidenav/sidenav.module";
import { AdminMyProfileModule } from "src/app/templates/admin/my-profile/admin-my-profile.module";

@NgModule({
  declarations: [MyProfileComponent],
  imports: [CommonModule, SidenavModule, AdminMyProfileModule],
  exports: [MyProfileComponent]
})
export class MyProfileModule {}
