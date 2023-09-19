import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from "typeorm";
import Question from "./Question";

@Entity()
export default class HomeHelp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  description: string;

  @OneToOne(() => Question)
  @JoinColumn()
  @JoinColumn({ name: "question_id" })
  question: Question;
}
