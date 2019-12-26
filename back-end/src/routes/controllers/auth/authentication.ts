import { UserModel, User } from "../../../models/user/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const buffer =
  "#k5vdo%GhWm^EbNB&!adCYFb*RPM$gjXmNOJ02%ZphyY&lh$cWbCz9Kl1Q!8*Q7qb81E335BqXMC6^#owkHmWDm9z62PhD%3fU%";

export const authentication = async (
  email: User["email"],
  password: User["password"]
) => {
  const fetchedUser = await UserModel.findOne({ email });
  if (!fetchedUser) {
    throw "Invalid Authentication Credentials!";
  }
  const isAuthenticated = await bcrypt.compare(password, fetchedUser.password);
  if (!isAuthenticated) {
    throw "Invalid Authentication Password!";
  }
  return fetchedUser;
};

export const generateToken = async (user: User) => {
  try {
    const token = jwt.sign(
      {
        email: user.email,
        id: user._id,
        type: user.type
      },
      buffer,
      { expiresIn: "1h" }
    );
    return {
      token: token,
      expiresIn: 3600,
      id: user.id
    };
  } catch (error) {
    throw "token not generated";
  }
};
