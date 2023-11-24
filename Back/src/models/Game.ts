import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import User from "./User";
import LevelDifficulty from "./LevelDifficulty";
import Help from "./Help";

@Entity()
export default class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  points: number;

  @Column({ type: "int" })
  questionNb: number;

  @Column({ type: "timestamp", nullable: true })
  created_at: Date;

  @ManyToOne(() => User, (user) => user.games)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => LevelDifficulty, (levelDifficulty) => levelDifficulty.games)
  @JoinColumn({ name: "levelDifficulty_id" })
  levelDifficulty: LevelDifficulty;


  @ManyToMany(() => Help)
  @JoinTable()
  helps: Help[]
}
