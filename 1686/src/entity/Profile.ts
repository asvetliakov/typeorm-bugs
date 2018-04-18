import { Entity, OneToOne, JoinColumn, Column } from "typeorm";
import { User } from "./User";

@Entity()
export class Profile {
    @OneToOne(type => User, u => u.profile, { primary: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "uuid" })
    public user: User;

    @Column("varchar")
    public b: string;
}