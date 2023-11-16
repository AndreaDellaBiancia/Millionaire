import { NextFunction, Request, Response } from "express";
import { dataSource } from "../dataSource/data-source";
import Question from "../models/Question";
import GoodAnswer from "../models/GoodAnswer";
import BadAnswer from "../models/BadAnswer";
import HomeHelp from "../models/HomeHelp";
import Game from "../models/Game";
import User from "../models/User";
import LevelDifficulty from "../models/LevelDifficulty";

const questionRepository = dataSource.getRepository(Question);
const goodAnswerRepository = dataSource.getRepository(GoodAnswer);
const badAnswersRepository = dataSource.getRepository(BadAnswer);
const homeHelpRepository = dataSource.getRepository(HomeHelp);
const gameRepository = dataSource.getRepository(Game);
const levelRepository = dataSource.getRepository(LevelDifficulty);
const userRepository = dataSource.getRepository(User);

const startGame = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const level: string = req.params.level;

    let levelId: number = 1;
    if (level === "easy") {
      levelId = 1;
    } else {
      levelId = 2;
    }

    // Récupérer les questions de la difficulté spécifiée
    const filteredQuestions = await questionRepository
      .createQueryBuilder("question")
      .leftJoinAndSelect("question.levelDifficulty", "levelDifficulty")
      .where("question.level_difficulty_id = :levelId", { levelId })
      .orderBy("question.price, RANDOM()") // Ordonner par le prix puis aléatoirement
      .select("DISTINCT ON (question.price) question.*")
      .getRawMany();

    // Récupérer les bonnes réponses des questions récupérées
    const goodAnswPromises: Promise<GoodAnswer | null>[] =
      filteredQuestions.map((question: Question) => {
        return goodAnswerRepository.findOne({
          where: { question: { id: question.id } },
        });
      });

    // Récupérer les mauvaises réponses des questions récupérées
    const badAnswPromises: Promise<BadAnswer[] | null>[] =
      filteredQuestions.map((question: Question) => {
        return badAnswersRepository.find({
          where: { question: { id: question.id } },
        });
      });

    // Récupérer les mauvaises réponses des questions récupérées
    const homeHelpPromises: Promise<HomeHelp | null>[] = filteredQuestions.map(
      (question: Question) => {
        return homeHelpRepository.findOne({
          where: { question: { id: question.id } },
        });
      }
    );

    // Attendre que toutes les promesses soient terminées
    const goodAnsws: (GoodAnswer | null)[] = await Promise.all(
      goodAnswPromises
    );
    const badAnsws: (BadAnswer[] | null)[] = await Promise.all(badAnswPromises);

    const homeHelps: (HomeHelp | null)[] = await Promise.all(homeHelpPromises);

    // Associer les bonnes réponses aux questions
    let questionGoodAnsw = filteredQuestions.map(
      (question: Question, index: number) => {
        return { ...question, goodAnsw: goodAnsws[index] };
      }
    );

    // Associer les mauvaises réponses aux questions
    let questionGBAnsw = questionGoodAnsw.map(
      (question: Question, index: number) => {
        return { ...question, badAnsw: badAnsws[index] };
      }
    );

    // Associer les home help  aux questions
    let questions = questionGBAnsw.map((question: Question, index: number) => {
      return { ...question, homeHelp: homeHelps[index] };
    });

    return res.status(200).json(questions);
  } catch (error: any) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const saveGame = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    let currentUser: User = req.body.user;
    const gamePoints: number = req.body.points;
    const questionNb: number = req.body.questionNb;
    const level: string = req.body.level;
    const levelDifficulty = await levelRepository.findOneBy({ level: level });
    if (levelDifficulty) {
      const newGame = new Game();
      newGame.points = gamePoints;
      newGame.questionNb = questionNb;
      newGame.user = currentUser;
      newGame.levelDifficulty = levelDifficulty;
      newGame.created_at = new Date(Date.now());
      gameRepository.save(newGame);
    }

    const user = await userRepository.findOneBy({ id: currentUser.id });
    if (user) {
      const userPoints: number = user.points + gamePoints;
      await userRepository.update(user.id, { points: userPoints });
    }

    return res.status(201).json({ message: "Game saved" });
  } catch (error: any) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const getGamesByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    let userId: number = Number(req.params.userId);
    let games: Game[] = await gameRepository.find({
      relations: {
        levelDifficulty: true,
        user: true,
      },
      where: {
        user: {
          id: userId,
        },
      },
      order: {
        created_at: "DESC",
      },
    });

    return res.status(201).json(games);
  } catch (error: any) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

export { startGame, saveGame, getGamesByUser };
