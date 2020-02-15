import { Grade } from "../models/grade/grade.model";
import { mapSubjectData } from "./mapSubjectData.helper";
import { mapUserData } from "./mapUserData.helper";

export const mapGradeData = (grade: Grade) => {
  const { _id, subject, user } = grade;
  return {
    id: _id,
    subject: mapSubjectData(subject),
    user: mapUserData(user),
    grade: grade.grade
  };
};

export const mapGradesData = (grades: Grade[]) => {
  return grades.map((grade) => {
    return mapGradeData(grade);
  });
};
