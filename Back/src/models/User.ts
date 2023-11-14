import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Game from "./Game";

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", unique: true })
  username: string;

  @Column({ type: "varchar", unique: true })
  email: string;

  @Column({ type: "varchar" })
  password: string;

  @Column({ type: "int", nullable: true })
  points: number;

  @OneToMany(() => Game, (game) => game.user)
  games: Game[];
}
