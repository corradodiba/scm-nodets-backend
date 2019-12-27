import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

import { AuthService } from "../auth.service";

import { SignupData } from "../authData.model";
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  templateUrl: "./signup.component.html",
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { showError: true }
  }]
})
export class SignupComponent implements OnInit, OnDestroy {
  isLoading = false;
  personalData: FormGroup;
  userTypes = ["Student", "Teacher"];
  private authStatusSub: Subscription;

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

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
      type: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);

    const {
      name,
      surname,
      dateOfBirth,
      fiscalCode,
      type,
      email,
      password
    } = form.value;
    const authData: SignupData = {
      name,
      surname,
      dateOfBirth,
      fiscalCode,
      type,
      email,
      password
    };
    console.log(authData);
    // this.authService.createUser(authData);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
