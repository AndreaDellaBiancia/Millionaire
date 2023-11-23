import { NextFunction, Request, Response } from "express";
require("dotenv").config();
const jwt = require("jsonwebtoken");
declare module "express" {
  interface Request {
    auth?: {
      userId: number;
      roleUser: string;
    };
  }
}
module.exports = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    const userId = decodedToken.userId;
    const userRole = decodedToken.roleUser.name;
    if (userRole === "SUPER_ADMIN" || userRole === "ADMIN" || userRole === "USER") {
      req.auth = {
        userId: userId,
        roleUser: userRole,
      }
      next();
    }else{
      res.status(401).json({message : "Permission denied"});
    }
  } catch (error) {
    res.status(401).json({ error });
  }
};
