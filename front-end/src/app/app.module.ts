import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatFormFieldModule,
  MatChipsModule,
  MatIconModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatOptionModule,
  MatSelectModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { UsersListsComponent } from "./users/users-lists/users-lists.component";
import { UserComponent } from "./users/user/user.component";
import { SubjectsComponent } from "./subjects/subjects.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    UsersListsComponent,
    UserComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
