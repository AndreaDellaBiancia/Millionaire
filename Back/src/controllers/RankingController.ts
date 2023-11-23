// Fichier où vous utilisez ExpressInterface
import { NextFunction, Request, Response } from "express";
import { dataSource } from "../dataSource/data-source";
import User from "../models/User";

const userRepository = dataSource.getRepository(User);

const getRanking = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<User[] | any> => {
  try {
    const users = await userRepository.find({
      relations:{
        role: true,
      },
      order: {
        points: "DESC",
      }
    });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({
      error:
        "Une erreur est survenue lors de la récupération des utilisateurs.",
    });
  }
};

export { getRanking };
