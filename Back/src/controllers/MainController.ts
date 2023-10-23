// Fichier où vous utilisez ExpressInterface
import { ExpressInterface } from "../interfaces/ExpressInterface";
import { dataSource } from "../dataSource/data-source";
import User from "../models/User";

const userRepository = dataSource.getRepository(User);

const getRanking = async ({
  req,
  res,
  next,
}: ExpressInterface): Promise<User[] | any> => {
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
