import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AuthService } from "../auth.service";

@Injectable({
  providedIn: "root"
})
export class IsGuestGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    if (!this.authService.getAuthStatus()) {
      return true;
    }
    this.router.navigate([""]);
    return false;
  }
}
