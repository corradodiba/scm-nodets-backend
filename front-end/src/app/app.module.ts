import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AuthInterceptor } from "./pages/auth/auth-interceptor";

import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./pages/auth/auth.module";
import { HomepageModule } from "./pages/homepage/homepage.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    HomepageModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
