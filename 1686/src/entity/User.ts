import { PrimaryGeneratedColumn, Column, Entity, PrimaryColumn, OneToOne } from "typeorm";
import { Profile } from "./Profile";

@Entity()
export class User {
    @PrimaryColumn("varchar", { length: 255 })
    public id: string;


    @Column("varchar")
    public name: string;

    @OneToOne(type => Profile, p => p.user, { eager: true })
    public profile: Profile;
}