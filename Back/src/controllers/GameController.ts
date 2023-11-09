import { NextFunction, Request, Response } from "express";
import { dataSource } from "../dataSource/data-source";
import Question from "../models/Question";
import GoodAnswer from "../models/GoodAnswer";
import BadAnswer from "../models/BadAnswer";
import HomeHelp from "../models/HomeHelp";

const questionRepository = dataSource.getRepository(Question);
const goodAnswerRepository = dataSource.getRepository(GoodAnswer);
const badAnswersRepository = dataSource.getRepository(BadAnswer);
const homeHelpRepository = dataSource.getRepository(HomeHelp);

const startGame = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const level: string = req.body.level;

    let levelId: number = 1;
    if (level === "easy") {
      levelId = 1;
    }else {
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
    const homeHelpPromises: Promise<HomeHelp | null>[] =
      filteredQuestions.map((question: Question) => {
        return homeHelpRepository.findOne({
          where: { question: { id: question.id } },
        });
      });

    // Attendre que toutes les promesses soient terminées
    const goodAnsws: (GoodAnswer | null)[] = await Promise.all(
      goodAnswPromises
    );
    const badAnsws: (BadAnswer[] | null)[] = await Promise.all(badAnswPromises);

    const homeHelps: (HomeHelp | null)[] = await Promise.all(
      homeHelpPromises
    );

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

export { startGame };
