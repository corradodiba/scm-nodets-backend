import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  // Authentication Pages
  // { path: "auth/login", component: LoginComponent },
  // { path: "auth/signup", component: SignupComponent },

  { path: "auth", loadChildren: "./auth/auth.module#AuthModule" },
  {
    path: "users",
    loadChildren: "./users/users.module#UsersModule",
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
