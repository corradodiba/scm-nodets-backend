import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const buffer =
  "#k5vdo%GhWm^EbNB&!adCYFb*RPM$gjXmNOJ02%ZphyY&lh$cWbCz9Kl1Q!8*Q7qb81E335BqXMC6^#owkHmWDm9z62PhD%3fU%";

export const isAuth = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw "Not Authorizated";
    }
    const decodedToken = jwt.verify(token, buffer);
    req.userData = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({
      message: "You are not authenticated!"
    });
  }
};
