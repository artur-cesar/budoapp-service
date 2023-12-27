import { MigrationInterface, QueryRunner } from "typeorm"

export class Users1703535597282 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        `CREATE TABLE IF NOT EXISTS public."user" (
            id uuid NOT NULL,
            name text NOT NULL,
            username text NOT NULL,
            "password" text NULL,
            CONSTRAINT user_pk PRIMARY KEY (id)
        );
        
        CREATE INDEX users_id_username ON users (id, username);`
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        'DROP TABLE IF EXISTS public."users"'
    }

}
