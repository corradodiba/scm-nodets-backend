import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../environments/environment";

import User from "../../interfaces/user.model";

@Injectable({
  providedIn: "root"
})
export class UsersListService {
  apiURL = `${environment.apiUrl}/${environment.usersPath}`;

  constructor(private httpClient: HttpClient) {}

  getUsers(): Promise<User[]> {
    return this.httpClient.get<User[]>(`${this.apiURL}`).toPromise();
  }
}
