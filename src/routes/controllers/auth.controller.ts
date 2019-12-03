import { Response, Request } from "express";

import { comparePwd } from "../../helpers/hashPwd.helper";

import {
  Student,
  add as addStudent,
  getByEmail as getStudentByEmail,
  CreateStudent
} from "../../models/student/student.model";

import {
  Teacher,
  add as addTeacher,
  getByEmail as getTeacherByEmail,
  CreateTeacher
} from "../../models/teacher/teacher.model";

export const signup = async (req: Request, res: Response) => {
  try {
    const { typeuser } = req.headers;
    const {
      fiscalCode,
      name,
      surname,
      dateOfBirth,
      subjects,
      email,
      password
    } = req.body;
    if (typeuser === "Student") {
      const student = await CreateStudent({
        fiscalCode,
        name,
        surname,
        dateOfBirth,
        email,
        password
      });
      const result: Student = await addStudent(student);
      return res.status(201).json(result);
    } else if (typeuser === "Teacher") {
      const teacher = await CreateTeacher({
        fiscalCode,
        name,
        surname,
        dateOfBirth,
        subjects,
        email,
        password
      });
      const result: Teacher = await addTeacher(teacher);
      return res.status(201).json(result);
    }
  } catch (err) {
    return res.status(400).json({ message: "user not created" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { typeuser } = req.headers;
    const { email, password } = req.body;
    let user: Student | Teacher;
    let isValid: boolean = false;
    if (typeuser === "Student") {
      user = await getStudentByEmail(email);
      isValid = await comparePwd(password, user.password);
    } else if (typeuser === "Teacher") {
      user = await getTeacherByEmail(email);
      isValid = await comparePwd(password, user.password);
    }
    if (!isValid) {
      throw "Invalid Credentials";
    }
    return res.status(200).json({ message: `User logged` });
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};
