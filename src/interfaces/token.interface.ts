import { User } from "../models/user/user.model";

export interface IToken {
  _id: User["_id"];
  email: User["email"];
  type: User["type"];
}
