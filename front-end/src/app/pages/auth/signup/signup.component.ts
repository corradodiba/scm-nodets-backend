import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import { AuthService } from "../auth.service";

import { SignupData } from "../../../interfaces/auth.model";

@Component({
  templateUrl: "./signup.component.html"
})
export class SignupComponent implements OnInit, OnDestroy {
  isLoading = false;
  userTypes = ["Student", "Teacher"];
  private authStatusSub: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(() => {
        this.isLoading = false;
      });
  }

  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const {
      email,
      password,
      userName,
      surname,
      dateOfBirth,
      fiscalCode,
      type
    } = form.value;

    const authData: SignupData = {
      name: userName,
      surname,
      dateOfBirth,
      fiscalCode,
      type,
      email,
      password
    };
    console.log(authData);
    this.authService.createUser(authData);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
