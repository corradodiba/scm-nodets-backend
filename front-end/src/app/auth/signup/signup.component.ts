import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

import { AuthData } from '../auth-data.model';
import { Subscription } from 'rxjs';


@Component({
  templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub: Subscription;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(() => {
      this.isLoading = false;
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
