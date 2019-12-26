import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../environments/environment";

import User from "../../interfaces/user.model";
@Injectable({
  providedIn: "root"
})
export class UserService {
  apiURL = `${environment.apiUrl}/${environment.usersPath}`;

  constructor(private httpClient: HttpClient) {}

  public getUserById(id: string): Promise<User> {
    return this.httpClient.get<User>(`${this.apiURL}/${id}`).toPromise();
  }
}
