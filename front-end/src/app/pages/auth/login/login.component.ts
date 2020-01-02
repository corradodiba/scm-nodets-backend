import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { AuthService } from "../auth.service";

import { LoginData } from "../../../interfaces/auth.model";
@Component({
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const authData: LoginData = {
      email: form.value.email,
      password: form.value.password
    };
    this.authService.loginUser(authData);
  }

  inputValidation(isvalid: boolean) {
    return isvalid ? "is-valid" : "is-invalid";
  }
}
