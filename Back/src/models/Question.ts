import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import Match from "./Match";
import LevelDifficulty from "./LevelDifficulty";
import BadAnswer from "./BadAnswer";
import GoodAnswer from "./GoodAnswer";

@Entity()
export default class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  title: string;

  @Column({ type: "int" })
  price: number; 

  @ManyToOne(
    () => LevelDifficulty,
    (levelDifficulty) => levelDifficulty.questions
  )
  @JoinColumn({ name: "level_difficulty_id" })
  levelDifficulty: LevelDifficulty;

  @ManyToMany(() => Match)
  @JoinTable({
    joinColumn: {
      name: "question_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "match_id",
      referencedColumnName: "id",
    },
  })
  matches: Match[];

  @OneToMany(() => BadAnswer, (badAnswer) => badAnswer.question)
  badAnswers: BadAnswer[];

}
