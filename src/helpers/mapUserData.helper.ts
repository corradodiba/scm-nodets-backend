import { User } from "../models/user/user.model";
import { mapSubjectsData } from "./mapSubjectData.helper";

export const mapUserData = (user: User) => {
  const {
    _id,
    email,
    fiscalCode,
    name,
    surname,
    dateOfBirth,
    type,
    subjects
  } = user;
  return {
    id: _id,
    name,
    surname,
    email,
    fiscalCode,
    dateOfBirth,
    type,
    subjects: subjects ? mapSubjectsData(subjects) : []
  };
};

export const mapUsersData = (users: User[]) => {
  return users.map((user) => {
    return mapUserData(user);
  });
};
