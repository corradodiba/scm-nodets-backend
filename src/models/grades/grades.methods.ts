import { Grades, GradesModel, CreateGrade } from "./grades.model";

export const getAll = async (idTeacher: string) => {
  try {
    const grades: Grades[] = await GradesModel.find({
      teacher: idTeacher
    }).populate("student subject teacher");
    if (!grades) {
      throw "No grade found for deletion!";
    }
    return grades;
  } catch (err) {
    throw err;
  }
};
export const getAllStudentGrades = async (student: string) => {
  try {
    const grades: Grades[] = await GradesModel.find({
      student
    }).populate("student subject teacher");
    if (!grades) {
      throw "No grades found!";
    }
    return grades;
  } catch (err) {
    throw err;
  }
};

export const add = async (
  grade: Number,
  student: string,
  subject: string,
  teacher: string
) => {
  try {
    const grades: Grades = CreateGrade({ grade, student, subject, teacher });
    return await grades.save();
  } catch (err) {
    throw err;
  }
};

export const deleteById = async (idGrade: string, idTeacher: string) => {
  try {
    const gradesDeleted = await GradesModel.findByIdAndRemove({
      _id: idGrade,
      teacher: idTeacher
    }).populate("student subject teacher");
    if (!gradesDeleted) {
      throw "No grade found for deletion!";
    }
    return gradesDeleted;
  } catch (err) {
    throw err;
  }
};

export const editGrade = async (
  idTeacher: string,
  idGrade: string,
  grade: Number
) => {
  try {
    const updatedGrade = await GradesModel.findOneAndUpdate(
      { _id: idGrade, teacher: idTeacher },
      {
        grade
      },
      { new: true }
    ).populate("student subject teacher");
    if (!updatedGrade || updatedGrade instanceof Error) {
      throw "No grade found for editing!";
    }
    return updatedGrade;
  } catch (err) {
    throw err;
  }
};
