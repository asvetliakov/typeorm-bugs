import { PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Entity, ManyToOne } from "typeorm";
import { User } from "./User";
import { JoinAttribute } from "typeorm/query-builder/JoinAttribute";

@Entity()
export class Another {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column("varchar")
    public test: string;


    // @ManyToOne(t => User, u => u.another, { onDelete: "CASCADE" })
    public user: User;
}