import { Courses, CoursesModel } from "./courses.model";

import { typeUser } from "../../interfaces/typeUser.type";
import { IToken } from "../../interfaces/token.interface";
import { CreateCourse } from "./courses.costructor";

export const getAll = async (type: typeUser, userId: string) => {
  try {
    if (type === "Admin") {
      const courses: Courses[] = await CoursesModel.find().populate(
        "students subjects"
      );
      return courses;
    }

    if (type === "Teacher") {
      const courses: Courses[] = await CoursesModel.find({
        teachers: {
          $in: [
            {
              _id: userId,
              type
            }
          ]
        }
      });
      return courses;
    }

    if (type === "Student") {
      const courses: Courses[] = await CoursesModel.find({
        students: {
          $in: [
            {
              _id: userId,
              type
            }
          ]
        }
      });
      return courses;
    }
  } catch (err) {
    throw err;
  }
};

export const add = async (year: Date, token: IToken): Promise<Courses> => {
  try {
    const { type } = token;
    if (type !== "Admin") {
      throw "Operation not permitted!";
    }
    const course = CreateCourse({ year });
    return await course.save();
  } catch (err) {
    throw err;
  }
};

// export const getAllStudentGrades = async (idStudent: string) => {
//   try {
//     const grades: Grades[] = await GradesModel.find({
//       student: idStudent
//     }).populate("student subject user");
//     if (!grades) {
//       throw "No grades found!";
//     }
//     return grades;
//   } catch (err) {
//     throw err;
//   }
// // };

// export const add = async (
//   grade: Number,
//   student: string,
//   subject: string,
//   user: string
// ) => {
//   try {
//     const grades: Grades = CreateGrade({ grade, //student,
//                                                 subject, user });
//     return await grades.save();
//   } catch (err) {
//     throw err;
//   }
// };

// export const deleteById = async (idGrade: string, idUser: string) => {
//   try {
//     const gradesDeleted = await GradesModel.findByIdAndRemove({
//       _id: idGrade,
//       user: idUser
//     }).populate("student subject user");
//     if (!gradesDeleted) {
//       throw "No grade found for deletion!";
//     }
//     return gradesDeleted;
//   } catch (err) {
//     throw err;
//   }
// };

// export const editGrade = async (
//   idUser: string,
//   idGrade: string,
//   grade: Number
// ) => {
//   try {
//     const updatedGrade = await GradesModel.findOneAndUpdate(
//       { _id: idGrade, user: idUser },
//       {
//         grade
//       },
//       { new: true }
//     ).populate("student subject user");
//     if (!updatedGrade || updatedGrade instanceof Error) {
//       throw "No grade found for editing!";
//     }
//     return updatedGrade;
//   } catch (err) {
//     throw err;
//   }
// };
