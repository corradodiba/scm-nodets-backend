import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GuestHomepageComponent } from "./guest-homepage.component";
import { NavbarModule } from "src/app/shared/navbar/navbar.module";
import { FooterModule } from "src/app/shared/footer/footer.module";

@NgModule({
  declarations: [GuestHomepageComponent],
  imports: [CommonModule, NavbarModule, FooterModule],
  exports: [GuestHomepageComponent]
})
export class GuestHomepageModule {}
