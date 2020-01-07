import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TeacherMyProfileComponent } from "./teacher-my-profile.component";
import { ProfileNavbarModule } from "../../../shared/profile-navbar/profile-navbar.module";

@NgModule({
  declarations: [TeacherMyProfileComponent],
  imports: [CommonModule, ProfileNavbarModule],
  exports: [TeacherMyProfileComponent]
})
export class TeacherMyProfileModule {}
