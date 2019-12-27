import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

import { AuthService } from "../auth.service";

import { SignupData, LoginData } from "../authData.model";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";

@Component({
  templateUrl: "./signup.component.html",
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ]
})
export class SignupComponent implements OnInit, OnDestroy {
  isLoading = false;
  personalData: FormGroup;
  authData: FormGroup;
  userTypes = ["Student", "Teacher"];
  private authStatusSub: Subscription;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(() => {
        this.isLoading = false;
      });
    this.personalData = this.formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      dateOfBirth: ["", Validators.required],
      fiscalCode: ["", Validators.required],
      type: ["", Validators.required]
    });
    this.authData = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(this.authData);
    const {
      name,
      surname,
      dateOfBirth,
      fiscalCode,
      type
    }: SignupData = this.personalData.value;
    const { email, password }: LoginData = this.authData.value;
    const authData: SignupData = {
      name,
      surname,
      dateOfBirth,
      fiscalCode,
      type,
      email,
      password
    };
    this.authService.createUser(authData);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
