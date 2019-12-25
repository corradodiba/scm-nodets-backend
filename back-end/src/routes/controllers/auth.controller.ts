import { Response, Request } from "express";
import bcrypt from "bcryptjs";

import { User, CreateUser, add } from "../../models/user/user.model";

export const signup = async (req: Request, res: Response) => {
  try {
    const {
      email,
      password,
      fiscalCode,
      name,
      surname,
      dateOfBirth,
      subjects
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user: User = CreateUser({
      email,
      hashedPassword,
      fiscalCode,
      name,
      surname,
      dateOfBirth,
      subjects
    });

    const fetchedUser = await add(user);
    return res.status(200).json(fetchedUser);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};
