import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "src/environments/environment";

import User from "../../interfaces/user.model";
import { IUserType } from "src/app/interfaces/userType.model";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  apiURL = `${environment.apiUrl}/${environment.usersPath}`;
  usersTypeQuery = `${this.apiURL}/${environment.userTypeQuery}`;
  constructor(private httpClient: HttpClient) {}

  getUsers(): Promise<User[]> {
    return this.httpClient.get<User[]>(`${this.apiURL}`).toPromise();
  }

  getUsersByType(type: IUserType) {
    return this.httpClient
      .get<User[]>(`${this.usersTypeQuery}${type}`)
      .toPromise();
  }

  getUserById(id: string): Promise<User> {
    return this.httpClient.get<User>(`${this.apiURL}/${id}`).toPromise();
  }

  editUserById(id: string, body: {}) {
    return this.httpClient.put<User>(`${this.apiURL}/${id}`, body).toPromise();
  }

  deleteUserById(id: string) {
    return this.httpClient.delete<User>(`${this.apiURL}/${id}`).toPromise();
  }
}
