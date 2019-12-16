import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatToolbarModule, MatCardModule } from "@angular/material";
import { UsersListsComponent } from "./users/users-lists/users-lists.component";
import { UserComponent } from "./users/user/user.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    UsersListsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
