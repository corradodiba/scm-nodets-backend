import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  URL = `${environment.usersPath}`;
  constructor(private router: Router) {}

  showUser(id: string) {
    this.router.navigate([`${this.URL}/${id}`]);
  }
}
