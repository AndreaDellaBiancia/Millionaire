import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from "typeorm";
import Question from "./Question";

@Entity()
export default class GoodAnswer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "int" })
  helpPercentage: number;

  @OneToOne(() => Question)
  @JoinColumn()
  @JoinColumn({ name: "question_id" })
  question: Question;
}
