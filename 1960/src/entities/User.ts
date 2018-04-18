import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("increment")
    public id: number;

    @Column("varchar")
    public name: string;

    @Column("datetime")
    public date1: Date;

    @Column("datetime", { nullable: true })
    public date2: Date;
}