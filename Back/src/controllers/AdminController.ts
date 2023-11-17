import { NextFunction, Request, Response } from "express";
import { dataSource } from "../dataSource/data-source";
import Question from "../models/Question";


const questionsRepository = dataSource.getRepository(Question);

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
        price: "ASC",
      },
    });

    console.log('====================================');
    console.log(questions);
    console.log('====================================');

    
    
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({
      error:
        "Une erreur est survenue lors de la récupération des utilisateurs.",
    });
  }
};



export { getQuestions };
