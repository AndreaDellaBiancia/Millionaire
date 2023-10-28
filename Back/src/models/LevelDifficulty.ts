import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Match from "./Match";
import Question from "./Question";

@Entity()
export default class LevelDifficulty {
  @PrimaryGeneratedColumn()
  id: number; 

  @Column({ type: "varchar" })
  level: string;

  @OneToMany(() => Question, (question) => question.levelDifficulty)
  questions: Question[];

  @OneToMany(() => Match, (match) => match.levelDifficulty)
  matches: Match[];
}
