import { UserModel, User } from "./user.model";
import { Subject } from "../subject/subject.model";

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

export const getById = async (id: string) => {
  try {
    const user = await UserModel.findOne({ _id: id }).populate(
      "subjects"
    );
    if (!user) {
      throw `No user with this id(${id}) found!`;
    }
    return user;
  } catch (err) {
    throw err;
  }
};

export const getSubjects = async (id: string): Promise<Subject[]> => {
  try {
    const user = await UserModel.findOne({ _id: id }).populate(
      "subjects"
    );
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

export const addSubject = async (id: string, subject: string[]) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: id },
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

export const deleteById = async (id: string) => {
  try {
    const userToDelete = await UserModel.findByIdAndRemove({
      _id: id
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

export const edit = async (id: string, user: User): Promise<User> => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      user
    ).populate("subjects");
    if (!updatedUser || updatedUser instanceof Error) {
      throw "No user or subjects found for editing!";
    }
    return updatedUser;
  } catch (err) {
    throw err;
  }
};
