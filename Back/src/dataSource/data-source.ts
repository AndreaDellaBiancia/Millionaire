import { DataSource } from "typeorm";
import User from "../models/User";
import Match from "../models/Match";
import Question from "../models/Question";
import HomeHelp from "../models/HomeHelp";
import GoodAnswer from "../models/GoodAnswer";
import BadAnswer from "../models/BadAnswer";
import LevelDifficulty from "../models/LevelDifficulty";

export const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "milionaire",
  password: "milionaire",
  database: "milionaire",
  synchronize: true,
  entities: [
    User,
    Match,
    LevelDifficulty,
    Question,
    HomeHelp,
    GoodAnswer,
    BadAnswer,
  ],
  logging: ["query", "error"],
});
