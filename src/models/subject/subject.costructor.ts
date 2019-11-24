import { Subject, SubjectModel } from "./subject.model";

interface CreateSubjectInput {
  name: Subject["name"];
  hours: Subject["hours"];
}

export const CreateSubject = ({ name, hours }: CreateSubjectInput): Subject => {
  try {
    return new SubjectModel({
      name,
      hours
    });
  } catch (err) {
    throw err;
  }
};
