import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";

import { AuthInterceptor } from "./auth/auth-interceptor";

import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { AppRoutingModule } from "./app-routing.module";
import { HomepageModule } from "./homepage/homepage.module";
import { TeachersComponent } from './teachers/teachers.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, TeachersComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    UsersModule,
    HomepageModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
