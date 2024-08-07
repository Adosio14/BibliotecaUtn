import { DataSource } from "typeorm";
import express, { Express } from "express";
import { Book } from "./entities/Book";
import cors from "cors";
import morgan from "morgan";
import { booksRouter } from "./routes/book";
import { AppDataSource } from "./db/dbConfig";

const app: Express = express()

app.use(express.json())
app.use(morgan("dev"));
app.use(cors());
app.use(booksRouter);

AppDataSource.initialize().then(() => app.listen(3000)).then(() => console.log("Listening on 3000"))
// app.listen(3000, () => {
//     try {
//         AppDataSource.initialize().then(() => console.log("Connected to db"))
//     } catch (err) {
//         console.log("Error connecting to DB ", err)
//     }
//     console.log("Running on 3000")
// });

