import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePlatformTable1720024428784 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE platform (
                id INT AUTO_INCREMENT,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                PRIMARY KEY (id)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
