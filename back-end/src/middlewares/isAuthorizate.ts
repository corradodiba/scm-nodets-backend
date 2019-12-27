import { Request, Response, NextFunction } from "express";

export const isAuthorizate = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  const { type } = req.userData;
  if (type !== "Admin") {
    return res.status(403).json({
      message: "Not Authorizated"
    });
  }
  next();
};
