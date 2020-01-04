import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { IsGuestGuard } from "./permissions/isGuest.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [IsGuestGuard] },
  { path: "signup", component: SignupComponent, canActivate: [IsGuestGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
