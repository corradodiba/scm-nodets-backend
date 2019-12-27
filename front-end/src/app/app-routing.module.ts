import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersListsComponent } from "./users/users-lists/users-lists.component";
import { UserComponent } from "./users/user/user.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  // Authentication Pages
  { path: "auth/login", component: LoginComponent },
  { path: "auth/signup", component: SignupComponent },

  { path: "users", component: UsersListsComponent, canActivate: [AuthGuard] },
  { path: "users/:userId", component: UserComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
