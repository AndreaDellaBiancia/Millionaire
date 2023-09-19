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
export default class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  points: number;

  @Column({ type: "varchar" })
  created_at: string;

  @ManyToOne(() => User, (user) => user.matches)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(
    () => LevelDifficulty,
    (levelDifficulty) => levelDifficulty.matches
  )
  @JoinColumn({ name: "levelDifficulty_id" })
  levelDifficulty: LevelDifficulty;
}
