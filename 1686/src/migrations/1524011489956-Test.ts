import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1524011489956 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, PRIMARY KEY(`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `profile` (`b` varchar(255) NOT NULL, `uuid` varchar(255) NOT NULL, PRIMARY KEY(`uuid`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `profile` ADD CONSTRAINT `fk_430bb7b5ba5b54e258e8db7c64d` FOREIGN KEY (`uuid`) REFERENCES `user`(`id`) ON DELETE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `profile` DROP FOREIGN KEY `fk_430bb7b5ba5b54e258e8db7c64d`");
        await queryRunner.query("DROP TABLE `profile`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
