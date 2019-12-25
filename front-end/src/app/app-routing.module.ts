import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersListsComponent } from "./users/users-lists/users-lists.component";
import { UserComponent } from "./users/user/user.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";

const routes: Routes = [
  // Authentication Pages
  { path: "auth/login", component: LoginComponent },
  { path: "auth/signup", component: SignupComponent },

  { path: "users", component: UsersListsComponent },
  { path: "users/:userId", component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
