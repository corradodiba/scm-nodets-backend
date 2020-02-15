import { Response, Request } from "express";
import bcrypt from "bcryptjs";

import { User, CreateUser, add } from "../../../models/user/user.model";
import { authentication, generateToken } from "./authentication";

import websocketConnection from "../../../websocket/socket";
import { mapUserData } from "../../../helpers/mapUserData.helper";

export const createUser = async (req: Request, res: Response) => {
  try {
    const {
      email,
      password,
      fiscalCode,
      name,
      surname,
      dateOfBirth,
      subjects,
      imagePath,
      type
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user: User = CreateUser({
      email,
      hashedPassword,
      fiscalCode,
      name,
      surname,
      dateOfBirth,
      subjects,
      imagePath,
      type
    });

    const fetchedUser = await add(user);
    return res.status(200).json(mapUserData(fetchedUser));
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

export const userLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const userAuthenticated = await authentication(email, password);
    const token = await generateToken(userAuthenticated);
    const io = websocketConnection.getIO();
    io.emit("auth", { status: true, id: userAuthenticated.id });
    return res.status(200).json(token);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};
