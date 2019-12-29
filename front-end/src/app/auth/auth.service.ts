import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

import { ITokenData } from "../interfaces/tokenData.model";
import { IUserType } from "../interfaces/userType.model";
import User from "../interfaces/user.model";

import { environment } from "../../environments/environment";

import { LoginData, SignupData } from "../interfaces/auth.model";

const URL = `${environment.apiUrl}/auth/`;
@Injectable({
  providedIn: "root"
})
export class AuthService {
  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>();
  private token = "";
  private tokenTimeout: any;
  private tokenDetails: { token: string; expiresIn: Date };
  private userId: string;
  private typeUser: IUserType;

  constructor(public http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getUserId() {
    return this.userId;
  }

  isAuth() {
    return this.isAuthenticated;
  }

  createUser(authData: SignupData) {
    const {
      fiscalCode,
      name,
      surname,
      dateOfBirth,
      type,
      email,
      password
    } = authData;

    this.http
      .post<User>(URL + "signup", {
        fiscalCode,
        name,
        surname,
        dateOfBirth,
        type,
        email,
        password
      })
      .subscribe(test => {
        this.loginUser({ email, password });
      });
  }

  loginUser(authData: LoginData) {
    this.http.post<ITokenData>(URL + "login", authData).subscribe(response => {
      const { token, id, type, expiresIn } = response;

      this.token = token;
      this.authStatusListener.next(true);
      if (token) {
        this.getTokenTimeout(expiresIn);
        this.isAuthenticated = true;
        this.userId = id;
        this.typeUser = type;
        this.authStatusListener.next(true);
        const timeStamp = new Date();
        const expirationDate = new Date(timeStamp.getTime() + expiresIn * 1000);
        this.storeAuthData(token, expirationDate, this.userId, type);
        this.router.navigate([`/users/${id}`]);
      }
    });
  }

  getTokenTimeout(expiresIn: number) {
    this.tokenTimeout = setTimeout(() => {
      this.logoutUser();
    }, expiresIn * 1000);
  }

  autoConfigAuthUser() {
    this.tokenDetails = this.getAuthStatus();
    if (!this.tokenDetails) {
      return;
    }
    const timestamp = new Date();
    const expirationDate =
      this.tokenDetails.expiresIn.getTime() - timestamp.getTime();
    if (expirationDate > 0) {
      this.token = this.tokenDetails.token;
      this.isAuthenticated = true;
      this.getTokenTimeout(expirationDate / 1000);
      this.authStatusListener.next(true);
    }
  }

  getAuthStatus() {
    const token = localStorage.getItem("token");
    const tokenExpirationDate = localStorage.getItem("expiresIn");
    const userId = localStorage.getItem("userId");
    const type = localStorage.getItem("type");

    if (token && tokenExpirationDate) {
      return {
        token,
        expiresIn: new Date(tokenExpirationDate),
        userId,
        type
      };
    }
  }

  storeAuthData(
    token: string,
    expiresIn: Date,
    userId: string,
    type: IUserType
  ) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiresIn", expiresIn.toISOString());
    localStorage.setItem("userId", userId);
    localStorage.setItem("type", type);
  }

  clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresIn");
    localStorage.removeItem("userId");
    localStorage.removeItem("type");
  }

  logoutUser() {
    this.token = "";
    this.isAuthenticated = false;
    this.userId = null;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimeout);
    this.clearAuthData();
    this.router.navigate(["/"]);
  }
}
