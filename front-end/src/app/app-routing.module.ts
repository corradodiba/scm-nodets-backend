import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomepageComponent } from "./pages/homepage/homepage.component";
import { MyProfileComponent } from "./pages/my-profile/my-profile.component";

const routes: Routes = [
  { path: "auth", loadChildren: "./pages/auth/auth.module#AuthModule" },
  { path: "", component: HomepageComponent },
  { path: "profile", component: MyProfileComponent }
  // {
  //   path: "users",
  //   loadChildren: "./users/users.module#UsersModule",
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: "courses",
  //   loadChildren: "./courses/courses.module#CoursesModule",
  //   canActivate: [AuthGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
