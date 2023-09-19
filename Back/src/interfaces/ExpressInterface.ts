// Fichier ExpressInterface.ts
import { NextFunction, Request, Response } from "express";

export interface ExpressInterface {
  req: Request,
  res: Response,
  next: NextFunction
}  