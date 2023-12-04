import { DataSource } from "typeorm";
import User from "../models/User";
import Game from "../models/Game";
import Question from "../models/Question";
import HomeHelp from "../models/HomeHelp";
import GoodAnswer from "../models/GoodAnswer";
import BadAnswer from "../models/BadAnswer";
import LevelDifficulty from "../models/LevelDifficulty";
import Role from "../models/Role";
import Help from "../models/Help";
require('dotenv').config();

export const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "millionnaire",
  password: "millionnaire",
  database: "millionnaire",
  synchronize: true,
  entities: [
    User,
    Game,
    LevelDifficulty,
    Question,
    HomeHelp,
    GoodAnswer,
    BadAnswer,
    Role,
    Help,
  ],
  logging: ["query", "error"],
});
