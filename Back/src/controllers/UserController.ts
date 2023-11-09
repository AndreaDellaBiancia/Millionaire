import { NextFunction, Request, Response } from "express";
import { dataSource } from "../dataSource/data-source";
import User from "../models/User";
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config();


const userRepository = dataSource.getRepository(User);

const getToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<User | any> => {
  try {
    const user = await userRepository.findOneBy({ email: req.body.email });
    
    if (!user) {
      return res.status(401).json({ message: "Paire login/mot de passe incorrecte" });
    }
    
    const isValid = await bcrypt.compare(req.body.password, user?.password);
    
    if (!isValid) {
      return res.status(401).json({ message: "Paire login/mot de passe incorrecte" });
    }

    return res.status(200).json({
      userId: user?.id,
      token: jwt.sign(
        { userId: user.id },
        process.env.TOKEN_SECRET,
        { expiresIn: '24h' }
    )
    });
    
  } catch (error) {
    return res.status(500).json({
      error: "Une erreur est survenue lors de la récupération des utilisateurs.",
    });
  }
};

export {getToken};