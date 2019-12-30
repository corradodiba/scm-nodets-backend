import { Request, Response, NextFunction } from "express";

export const isCurrentUser = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  const { type, id } = req.userData;
  const isCurrent = req.params._id !== id;
  if (type !== "Admin" || !isCurrent) {
    return res.status(403).json({
      message: "Not Authorizated"
    });
  }
  next();
};
