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
export class IsAdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    const type = this.authService.getAuthStatus().type;
    if (type !== "Admin") {
      this.router.navigate([""]);
      return false;
    }
    return true;
  }
}
