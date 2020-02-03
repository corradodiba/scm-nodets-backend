import { User } from "../models/user/user.model";

export const mapUserData = (user: User) => {
  const { _id, email, fiscalCode, name, surname, dateOfBirth, type } = user;
  return {
    id: _id,
    name,
    surname,
    email,
    fiscalCode,
    dateOfBirth,
    type
  };
};

export const mapUsersData = (users: User[]) => {
  return users.map((user) => {
    return mapUserData(user);
  });
};
