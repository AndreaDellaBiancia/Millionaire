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

const createQuestion = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const question = req.body.question;
    const goodAnswer = req.body.goodAnswer;
    const badAnswer1 = req.body.badAnswer1;
    const badAnswer2 = req.body.badAnswer2;
    const badAnswer3 = req.body.badAnswer3;
    const homeHelp = req.body.homeHelp;

    const newQuestion = await questionsRepository.save(question);
    let newGoodAnswer = new GoodAnswer();
    let newBadAnswer1 = new BadAnswer();
    let newBadAnswer2 = new BadAnswer();
    let newBadAnswer3 = new BadAnswer();
    let newHomeHelp = new HomeHelp();

    newGoodAnswer = {
      ...newGoodAnswer,
      title: goodAnswer.title,
      help_percentage: goodAnswer.help_percentage,
      question: newQuestion.id,
    };

    newBadAnswer1 = {
      ...newBadAnswer1,
      title: badAnswer1.title,
      help_percentage: badAnswer1.help_percentage,
      question: newQuestion.id,
    };

    newBadAnswer2 = {
      ...newBadAnswer2,
      title: badAnswer2.title,
      help_percentage: badAnswer2.help_percentage,
      question: newQuestion.id,
    };

    newBadAnswer3 = {
      ...newBadAnswer3,
      title: badAnswer3.title,
      help_percentage: badAnswer3.help_percentage,
      question: newQuestion.id,
    };

    newHomeHelp = {
      ...newHomeHelp,
      description: homeHelp.description,
      question: newQuestion.id,
    };

    await goodAnswerRepository.save(newGoodAnswer);
    await badAnswersRepository.save(newBadAnswer1);
    await badAnswersRepository.save(newBadAnswer2);
    await badAnswersRepository.save(newBadAnswer3);
    await homeHelpRepository.save(newHomeHelp);

    return res.status(200).json({ message: "Question modifiée avec succes !" });
  } catch (error) {
    return res.status(500).json({
      error: "Une erreur est survenue lors de la mise à jour de la question.",
    });
  }
};

const updateQuestion = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const question = req.body.question;
    const goodAnswer = req.body.goodAnswer;
    const badAnswer1 = req.body.badAnswer1;
    const badAnswer2 = req.body.badAnswer2;
    const badAnswer3 = req.body.badAnswer3;
    const homeHelp = req.body.homeHelp;

    await questionsRepository.save(question);
    await goodAnswerRepository.save(goodAnswer);
    await badAnswersRepository.save(badAnswer1);
    await badAnswersRepository.save(badAnswer2);
    await badAnswersRepository.save(badAnswer3);
    await homeHelpRepository.save(homeHelp);

    return res.status(200).json({ message: "Question modifiée avec succes !" });
  } catch (error) {
    return res.status(500).json({
      error: "Une erreur est survenue lors de la mise à jour de la question.",
    });
  }
};

const deleteQuestion = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const questionId = req.params.questionId;

    await goodAnswerRepository
      .createQueryBuilder("goodAnswer")
      .delete()
      .from(GoodAnswer)
      .where("question_id = :questionId", { questionId })
      .execute();

    await badAnswersRepository
      .createQueryBuilder("badAnswers")
      .delete()
      .from(BadAnswer)
      .where("question_id = :questionId", { questionId })
      .execute();

    await homeHelpRepository
      .createQueryBuilder("homeHelp")
      .delete()
      .from(HomeHelp)
      .where("question_id = :questionId", { questionId })
      .execute();

    await questionsRepository
      .createQueryBuilder("question")
      .delete()
      .from(Question)
      .where("id = :questionId", { questionId })
      .execute();

    return res
      .status(200)
      .json({ message: "Question supprimée avec succes !" });
  } catch (error) {
    return res.status(500).json({
      error: "Une erreur est survenue lors de la mise à jour de la question.",
    });
  }
};

export {
  getQuestions,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
