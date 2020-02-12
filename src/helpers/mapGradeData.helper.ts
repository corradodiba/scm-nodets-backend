import { Grades } from "../models/grades/grades.model";
import { mapSubjectData } from "./mapSubjectData.helper";
import { mapUserData } from "./mapUserData.helper";

export const mapGradeData = (grade: Grades) => {
  const { _id, subject, user } = grade;
  return {
    id: _id,
    subject: mapSubjectData(subject),
    user: mapUserData(user)
  };
};

export const mapGradesData = (grades: Grades[]) => {
  return grades.map((grade) => {
    return mapGradeData(grade);
  });
};
