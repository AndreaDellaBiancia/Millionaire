import { NextFunction, Request, Response } from "express";
import { dataSource } from "../dataSource/data-source";
import Question from "../models/Question";
import GoodAnswer from "../models/GoodAnswer";
import BadAnswer from "../models/BadAnswer";
import HomeHelp from "../models/HomeHelp";

const questionsRepository = dataSource.getRepository(Question);
const goodAnswerRepository = dataSource.getRepository(GoodAnswer);
const badAnswersRepository = dataSource.getRepository(BadAnswer);
const homeHelpRepository = dataSource.getRepository(HomeHelp);

const getQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Question[] | any> => {
  try {
    let questions: Question[] = await questionsRepository.find({
      relations: {
        levelDifficulty: true,
      },
      order: {
        award: "ASC",
      },
    });
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({
      error: "Une erreur est survenue lors de la récupération des questions.",
    });
  }
};

const getQuestionById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const questionId: number = Number(req.params.questionId);
    const question: Question | null = await questionsRepository.findOne({
      relations: {
        levelDifficulty: true,
      },
      where: {
        id: questionId,
      },
    });
    let questionDatas = {};
    if (question) {
      const goodAnswer: GoodAnswer | null =
        await goodAnswerRepository.findOneBy({
          question: question,
        });
      const basAnswers: BadAnswer[] | null = await badAnswersRepository.find({
        where: {
          question: question,
        },
      });

      const homeHelp: HomeHelp | null = await homeHelpRepository.findOneBy({
        question: question,
      });

      questionDatas = {
        question: question,
        goodAnswer: goodAnswer,
        badAnswers: basAnswers,
        homeHelp: homeHelp,
      };
    }
    return res.status(200).json(questionDatas);
  } catch (error) {
    return res.status(500).json({
      error: "Une erreur est survenue lors de la récupération de la question.",
    });
  }
};

export { getQuestions, getQuestionById };
