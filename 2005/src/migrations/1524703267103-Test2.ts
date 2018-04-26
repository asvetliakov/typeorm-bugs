import {MigrationInterface, QueryRunner} from "typeorm";

export class test21524703267103 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `another` (`id` int NOT NULL AUTO_INCREMENT, `test` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `activated` tinyint(1) NOT NULL, `dnd` tinyint(1) NOT NULL DEFAULT 0, `activationToken` varchar(128) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `another`");
    }

}
