import { IUserType } from "./userType.model";

export interface ITokenData {
  token: string;
  expiresIn: number;
  id: string;
  type: IUserType;
}
