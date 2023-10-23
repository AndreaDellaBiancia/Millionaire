import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Match from "./Match";

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

  @Column({ type: "int" })
  points: number;

  @OneToMany(() => Match, (match) => match.user)
  matches: Match[];
}
