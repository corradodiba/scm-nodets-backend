import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthRoutingModule } from "./auth-routing.module";
import {
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatStepperModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatNativeDateModule
} from "@angular/material";

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatStepperModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class AuthModule {}
