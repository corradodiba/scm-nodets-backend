import { Request, Response, NextFunction } from "express";

export const isAtLeastStudent = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  const { type } = req.userData;
  if (type !== "Admin" || type !== "Student") {
    return res.status(403).json({
      message: "Not Authorizated"
    });
  }
  next();
};
