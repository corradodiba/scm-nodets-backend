import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { HomepageComponent } from "./homepage/homepage.component";

const routes: Routes = [
  { path: "auth", loadChildren: "./auth/auth.module#AuthModule" },
  {
    path: "users",
    loadChildren: "./users/users.module#UsersModule",
    canActivate: [AuthGuard]
  },
  {
    path: "courses",
    loadChildren: "./courses/courses.module#CoursesModule",
    canActivate: [AuthGuard]
  },
  {
    path: "",
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
