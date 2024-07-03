import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { CreateMigrationTable1720020510614 } from "./migration/1720020510614-create_migration_table"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "phamquan",
    password: "phamquan",
    database: "typeorm_test",
    synchronize: true,
    logging: false,
    entities: ['src/entity/*.ts'],
    migrations: ["src/migration/*.{ts, js}"],
    subscribers: [],
})
