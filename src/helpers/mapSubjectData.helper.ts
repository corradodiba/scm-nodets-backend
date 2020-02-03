import { Subject } from "../models/subject/subject.model";

export const mapSubjectData = (subject: Subject) => {
  const { _id, name, hours } = subject;
  return {
    id: _id,
    name,
    hours
  };
};

export const mapSubjectsData = (subjects: Subject[]) => {
  return subjects.map((subject) => {
    return mapSubjectData(subject);
  });
};
