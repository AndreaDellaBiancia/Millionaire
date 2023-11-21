import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import User from "./User";

@Entity()
export default class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", unique: true })
  name: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
