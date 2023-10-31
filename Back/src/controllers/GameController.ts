import { NextFunction, Request, Response } from "express";
import { dataSource } from "../dataSource/data-source";
import Question from "../models/Question";
import GoodAnswer from "../models/GoodAnswer";
import BadAnswer from "../models/BadAnswer";

const questionRepository = dataSource.getRepository(Question);
const goodAnswerRepository = dataSource.getRepository(GoodAnswer);
const badAnswersRepository = dataSource.getRepository(BadAnswer);

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
    } else if (level === "medium") {
      levelId = 2;
    } else {
      levelId = 3;
    }

    // Récupérer les questions de la difficulté spécifiée
    let filteredQuestions = await questionRepository
      .createQueryBuilder("q")
      .leftJoinAndSelect("q.levelDifficulty", "levelDifficulty")
      .where("q.level_difficulty_id = :levelId", {
        levelId,
      })
      .getMany();

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

    // Attendre que toutes les promesses soient terminées
    const goodAnsws: (GoodAnswer | null)[] = await Promise.all(
      goodAnswPromises
    );
    const badAnsws: (BadAnswer[] | null)[] = await Promise.all(badAnswPromises);

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

    //console.log(questionGBAnsw);
    res.status(200).json(questionGBAnsw);
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export { startGame };
