import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Question from "./Question";
import Game from "./Game";

@Entity()
export default class LevelDifficulty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  level: string;

  @OneToMany(() => Question, (question) => question.levelDifficulty)
  questions: Question[];

  @OneToMany(() => Game, (game) => game.levelDifficulty)
  games: Game[];
}
