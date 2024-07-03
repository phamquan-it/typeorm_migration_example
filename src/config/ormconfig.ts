import { DataSource, DataSourceOptions } from "typeorm"
import 'dotenv/config'

export const cliOrmConfig: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'phamquan',
    password: 'phamquan',
    database: 'typeorm_test',
    entities: ["src/entity/*.ts"],
    migrations: ["src/migration/*.ts"]
}

const datasource = new DataSource(cliOrmConfig)

export default  datasource