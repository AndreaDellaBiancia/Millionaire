import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import User from "./User";
import LevelDifficulty from "./LevelDifficulty";

@Entity()
export default class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  points: number;

  @Column({ type: "int" })
  questionNb: number;

  @Column({ type: 'varchar', nullable: true })
  created_at: string;

  @ManyToOne(() => User, (user) => user.games)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(
    () => LevelDifficulty,
    (levelDifficulty) => levelDifficulty.games
  )
  @JoinColumn({ name: "levelDifficulty_id" })
  levelDifficulty: LevelDifficulty;
}
