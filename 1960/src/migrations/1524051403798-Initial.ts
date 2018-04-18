import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1524051403798 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `date1` datetime NOT NULL, `date2` datetime NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `user`");
    }

}
