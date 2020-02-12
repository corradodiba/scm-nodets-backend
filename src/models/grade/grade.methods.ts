import { Grade, GradeModel, CreateGrade } from "./grade.model";

export const getAll = async (user: string) => {
  try {
    const grades: Grade[] = await GradeModel.find({
      user
    }).populate("subject user");
    if (!grades) {
      throw "No grade found for deletion!";
    }
    return grades;
  } catch (err) {
    throw err;
  }
};

export const getById = async (_id: string) => {
  try {
    const grade: Grade | null = await GradeModel.findById({ _id }).populate(
      "subject user"
    );
    if (!grade) {
      throw "No grade found for deletion!";
    }
    return grade;
  } catch (err) {
    throw err;
  }
};

export const add = async (grade: Number, subject: string, user: string) => {
  try {
    const createdGrade: Grade = CreateGrade({ grade, subject, user });
    return await createdGrade.save();
  } catch (err) {
    throw err;
  }
};

export const deleteById = async (_id: string, user: string) => {
  try {
    const gradesDeleted = await GradeModel.findByIdAndRemove({
      _id,
      user
    }).populate("subject user");
    if (!gradesDeleted) {
      throw "No grade found for deletion!";
    }
    return gradesDeleted;
  } catch (err) {
    throw err;
  }
};

export const editGrade = async (_id: string, grade: Number) => {
  try {
    const updatedGrade = await GradeModel.findOneAndUpdate(
      { _id },
      {
        grade
      },
      { new: true }
    ).populate("subject user");
    if (!updatedGrade || updatedGrade instanceof Error) {
      throw "No grade found for editing!";
    }
    return updatedGrade;
  } catch (err) {
    throw err;
  }
};
