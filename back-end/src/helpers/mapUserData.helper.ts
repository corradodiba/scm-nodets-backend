import { User } from "../models/user/user.model";
import { getDateToString } from "./getDateToString.helper";

export const mapUserData = (user: User) => {
  const { _id, name, surname, dateOfBirth, fiscalCode, type } = user;
  console.log(getDateToString(dateOfBirth));
  return {
    _id,
    name,
    surname,
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
