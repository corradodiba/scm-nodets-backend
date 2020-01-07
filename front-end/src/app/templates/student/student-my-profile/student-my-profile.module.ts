import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentMyProfileComponent } from "./student-my-profile.component";
import { ProfileNavbarModule } from "../../../shared/profile-navbar/profile-navbar.module";

@NgModule({
  declarations: [StudentMyProfileComponent],
  imports: [CommonModule, ProfileNavbarModule],
  exports: [StudentMyProfileComponent]
})
export class StudentMyProfileModule {}
