import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminMyProfileComponent } from "./admin-my-profile.component";
import { ProfileNavbarModule } from "src/app/shared/profile-navbar/profile-navbar.module";

@NgModule({
  declarations: [AdminMyProfileComponent],
  imports: [CommonModule, ProfileNavbarModule],
  exports: [AdminMyProfileComponent]
})
export class AdminMyProfileModule {}
