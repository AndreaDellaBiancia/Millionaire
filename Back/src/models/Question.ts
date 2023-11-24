import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import Match from "./Game";
import LevelDifficulty from "./LevelDifficulty";
import BadAnswer from "./BadAnswer";

@Entity()
export default class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  title: string;

  @Column({ type: "int" })
  award: number;

  @ManyToOne(
    () => LevelDifficulty,
    (levelDifficulty) => levelDifficulty.questions
  )
  @JoinColumn({ name: "level_difficulty_id" })
  levelDifficulty: LevelDifficulty;

  @OneToMany(() => BadAnswer, (badAnswer) => badAnswer.question)
  badAnswers: BadAnswer[];
}
