import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import Question from "./Question";

@Entity()
export default class BadAnswer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "int" })
  help_percentage: number;

  @ManyToOne(() => Question, (question) => question.badAnswers)
  @JoinColumn({ name: "question_id" })
  question: Question;
}
