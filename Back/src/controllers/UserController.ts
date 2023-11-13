import { NextFunction, Request, Response } from "express";
import { dataSource } from "../dataSource/data-source";
import User from "../models/User";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userRepository = dataSource.getRepository(User);

const getToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<User | any> => {
  try {

    //On controle si l'utilisateur existe dans la bdd
    const user = await userRepository.findOneBy({ email: req.body.email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Paire login/mot de passe incorrecte" });
    }

    // On compare le mdp en clair avec le mdp hashé
    const isValid = await bcrypt.compare(req.body.password, user?.password);

    if (!isValid) {
      return res
        .status(401)
        .json({ message: "Paire login/mot de passe incorrecte" });
    }

    //On genere le token et on le returne
    return res.status(200).json({
      userId: user?.id,
      token: jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET, {
        expiresIn: "24h",
      }),
    });
  } catch (error) {
    return res.status(500).json({
      error:
        "Une erreur est survenue lors de la récupération des utilisateurs.",
    });
  }
};

const registration = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<User | any> => {
  try {
    // On récupere les infos dans le corp de la requete
    const password = req.body.password;
    const email = req.body.email;
    const username = req.body.username;

    // On controle si l'email et le username existent déjà
    const userEmail = await userRepository.findOneBy({ email: email });
    if (userEmail) {
      return res.status(401).json({ message: "Email déjà existante" });
    }
    const userUsername = await userRepository.findOneBy({ username: username });
    if (userUsername) {
      return res.status(401).json({ message: "Username déjà existante" });
    }

    //On hash le mdp et on enregistre le nouveau utilisateur
    const newUser = new User();
    const passwordHash = await bcrypt.hash(req.body.password, 10);

    newUser.username = username;
    newUser.password = passwordHash;
    newUser.email = email;
    newUser.points = 0;

    await userRepository.save(newUser);

    return res.status(200).json({ message: "Utilisateur enregistré." });
  } catch (error) {
    return res.status(500).json({
      error: "Une erreur est survenue lors de l'inscription.",
    });
  }
};

export { getToken, registration };
