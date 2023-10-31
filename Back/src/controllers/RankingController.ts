// Fichier où vous utilisez ExpressInterface
import { NextFunction, Request, Response } from "express";
import { dataSource } from "../dataSource/data-source";
import User from "../models/User";
import { log } from "console";

const userRepository = dataSource.getRepository(User);

const getRanking = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<User[] | any> => {
  try {
    const users = await userRepository.find({
      order: {
        points: "DESC",
      },
      take: 10,
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      error:
        "Une erreur est survenue lors de la récupération des utilisateurs.",
    });
  }
};

export { getRanking };
