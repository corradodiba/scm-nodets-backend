import { User } from "../models/user/user.model";
import { getDateToString } from "./getDateToString.helper";

export const mapUserData = (user: User) => {
  const { _id, name, surname, email, dateOfBirth, fiscalCode, type } = user;
  return {
    _id,
    name,
    surname,
    email,
    dateOfBirth: getDateToString(dateOfBirth),
    fiscalCode,
    type
  };
};

export const mapUsersData = (users: User[]) => {
  return users.map((user) => {
    return mapUserData(user);
  });
};
