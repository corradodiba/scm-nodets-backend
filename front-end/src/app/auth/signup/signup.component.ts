import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

import { AuthData } from '../auth-data.model';
import { Subscription } from 'rxjs';


@Component({
  templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {
  isLoading = false;
  firstFormGroup: FormGroup;
  userTypes = ["Student", "Teacher"];
  private authStatusSub: Subscription;

  constructor(public authService: AuthService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(() => {
      this.isLoading = false;
    });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  onSignUp(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const authData: AuthData = {
      email: form.value.email,
      password: form.value.password
    };

    this.authService.createUser(authData);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
