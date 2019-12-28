import { environment } from "src/environments/environment";
import User from "../interfaces/user.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  apiURL = `${environment.apiUrl}/${environment.usersPath}`;
  constructor(private httpClient: HttpClient) {}

  getUsers(): Promise<User[]> {
    return this.httpClient.get<User[]>(`${this.apiURL}`).toPromise();
  }

  getUserById(id: string): Promise<User> {
    return this.httpClient.get<User>(`${this.apiURL}/${id}`).toPromise();
  }
}
