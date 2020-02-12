import { Grades, GradesModel, CreateGrade } from "./grades.model";

export const getAll = async (idUser: string) => {
  try {
    const grades: Grades[] = await GradesModel.find({
      user: idUser
    }).populate("subject user");
    if (!grades) {
      throw "No grade found for deletion!";
    }
    return grades;
  } catch (err) {
    throw err;
  }
};
// export const getAllStudentGrades = async (idStudent: string) => {
//   try {
//     const grades: Grades[] = await GradesModel.find({
//       student: idStudent
//     }).populate("subject user");
//     if (!grades) {
//       throw "No grades found!";
//     }
//     return grades;
//   } catch (err) {
//     throw err;
//   }
// };

export const add = async (grade: Number, subject: string, user: string) => {
  try {
    const createdGrade: Grades = CreateGrade({ grade, subject, user });
    return await createdGrade.save();
  } catch (err) {
    throw err;
  }
};

export const deleteById = async (idGrade: string, idUser: string) => {
  try {
    const gradesDeleted = await GradesModel.findByIdAndRemove({
      _id: idGrade,
      user: idUser
    }).populate("subject user");
    if (!gradesDeleted) {
      throw "No grade found for deletion!";
    }
    return gradesDeleted;
  } catch (err) {
    throw err;
  }
};

export const editGrade = async (
  idUser: string,
  idGrade: string,
  grade: Number
) => {
  try {
    const updatedGrade = await GradesModel.findOneAndUpdate(
      { _id: idGrade, user: idUser },
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
