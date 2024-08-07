import { DataSource } from "typeorm";
import { Book } from "../entities/Book";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "alvarito",
    database: "library",
    entities: [Book],
    synchronize: true,

});