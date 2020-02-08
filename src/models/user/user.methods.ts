import { UserModel, User } from "./user.model";
import { Subject } from "../subject/subject.model";

import { typeUser } from "../../interfaces/typeUser.type";

export const getAll = async () => {
  try {
    const users = await UserModel.find().populate("subjects");
    if (!users) {
      throw "No subject found!";
    }
    return users;
  } catch (err) {
    throw err;
  }
};

export const getByType = async (type: typeUser) => {
  try {
    const users = await UserModel.find({ type }).populate("subjects");
    if (!users) {
      throw `No user with this type(${type}) found!`;
    }
    return users;
  } catch (err) {
    throw err;
  }
};

export const getById = async (_id: string) => {
  try {
    const user = await UserModel.findOne({ _id }).populate("subjects");
    if (!user) {
      throw `No user with this id(${_id}) found!`;
    }
    return user;
  } catch (err) {
    throw err;
  }
};

export const getSubjects = async (_id: string): Promise<Subject[]> => {
  try {
    const user = await UserModel.findOne({ _id }).populate("subjects");
    if (!user || user instanceof Error) {
      throw "No user found!";
    }

    if (!user.subjects) {
      throw "No subjects found!";
    }
    return user.subjects as Subject[];
  } catch (err) {
    throw err;
  }
};

export const add = async (user: User) => {
  try {
    return await user.save();
  } catch (err) {
    throw err;
  }
};

export const addSubject = async (_id: string, subject: string[]) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id },
      {
        $addToSet: {
          subjects: {
            $each: subject
          }
        }
      },
      { new: true }
    ).populate("subjects");
    if (!user) {
      throw "Impossible to update subjects user";
    }
    return user;
  } catch (err) {
    throw err;
  }
};

export const deleteById = async (_id: string) => {
  try {
    const userToDelete = await UserModel.findByIdAndRemove({
      _id
    }).populate("subjects");
    if (!userToDelete) {
      throw "No user found for deletion!";
    }
    return userToDelete;
  } catch (err) {
    throw err;
  }
};

export const deleteSubjects = async (idUser: string, idSubject: string) => {
  try {
    const deletedSubjects = await UserModel.findOneAndUpdate(
      { _id: idUser, subjects: { $in: idSubject } },
      {
        $pull: {
          subjects: { $in: idSubject }
        }
      },
      { new: true }
    ).populate("subjects");

    if (!deletedSubjects) {
      throw "No user found for deleting";
    }
    return deletedSubjects.subjects;
  } catch (err) {
    throw err;
  }
};

export const edit = async (_id: string, user: User): Promise<User> => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      _id,
      {
        ...user
      },
      { new: true }
    ).populate("subjects");
    if (!updatedUser || updatedUser instanceof Error) {
      throw "No user or subjects found for editing!";
    }
    return updatedUser;
  } catch (err) {
    throw err;
  }
};
