import { PrimaryGeneratedColumn, Column, Entity, OneToOne, OneToMany } from "typeorm";
import { Another } from "./Another";

@Entity()
export class User {
    /**
     * User id
     */
    @PrimaryGeneratedColumn("increment", { type: "integer" })
    public readonly id: number;

    /**
     * User activation status
     */
    @Column({
        type: "tinyint",
        width: 1,
        // default: 0,
        transformer: {
            from: val => !!val,
            to: val => val,
        },
    })
    public activated: boolean = false;

    /**
     * Do not disturb global flag for user
     */
    @Column({
        type: "tinyint",
        default: 0,
        width: 1,
        transformer: {
            from: val => !!val,
            to: val => val,
        },
    })
    public dnd: boolean = false;

    /**
     * User activation token
     *
     */
    @Column("varchar", {
        length: 128,
        nullable: true,
    })
    public activationToken: string | null = null;
}