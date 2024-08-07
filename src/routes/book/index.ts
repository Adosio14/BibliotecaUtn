import { Router } from "express";
import { getAll, remove, save, update } from "../../controllers/book";


export const booksRouter: Router = Router();

booksRouter.get("/", getAll);
booksRouter.post("/", save);
booksRouter.put("/update/:id", update);
booksRouter.post("/delete/:id", remove);