import { NextFunction, Request, Response } from "express";
import { dataSource } from "../dataSource/data-source";
import User from "../models/User";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
import { sendResetPassword } from "../middleware/sendResetPassword";

const userRepository = dataSource.getRepository(User);

// Fonction pour générer un jeton de réinitialisation de mot de passe
const getResetPasswordToken = (user: User) => {
  const token = jwt.sign(
    { userId: user.id, roleUser: user.role },
    process.env.TOKEN_SECRET,
    {
      expiresIn: "10m",
    }
  );

  return token;
};

// Middleware pour créer un jeton de réinitialisation de mot de passe et l'envoyer par e-mail
const createTokenResetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<User | any> => {
  try {
    const emailData = req.body.email;
    const user = await userRepository.findOneBy({ email: emailData });

    if (!user) {
      return res.status(500).json({ message: "User not found" });
    }

    const token = getResetPasswordToken(user);
    user.reset_password_token = token;

    await userRepository.save(user);

    // Envoie un e-mail avec les instructions de réinitialisation
    await sendResetPassword({ email: emailData, token });

    return res
      .status(200)
      .json({ message: "Email sent with reset instructions" });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
};

// Middleware pour mettre à jour le mot de passe en utilisant le jeton de réinitialisation
const updatePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<User | any> => {
  try {
    const passwordData = req.body.password;
    const tokenData = req.body.token;

    // Vérifie la validité du jeton
    const decodedToken = jwt.verify(tokenData, process.env.TOKEN_SECRET);

    if (!decodedToken) {
      return res.status(500).json({ message: "token non valide" });
    }

    const userId = decodedToken.userId;

    const user = await userRepository.findOneBy({ id: userId });

    const userToken = user?.reset_password_token;

    // Vérifie que le jeton stocké correspond au jeton fourni
    if (userToken === tokenData) {
      if (user) {
        // Hache et enregistre le nouveau mot de passe
        user.password = await bcrypt.hash(passwordData, 10);
        await userRepository.save(user);
      }
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
};

export { createTokenResetPassword, updatePassword };
