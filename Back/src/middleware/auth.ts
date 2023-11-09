import { NextFunction, Request, Response } from "express";
require('dotenv').config();
const jwt = require("jsonwebtoken");
declare module 'express' {
  interface Request {
    auth?: {
      userId: string; // ou le type approprié pour userId
    };
  }
}
module.exports = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decodedToken = jwt.verify(token,  process.env.TOKEN_SECRET);
    const userId = decodedToken.userId;
    req.auth = {
      userId: userId,
    };
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};
