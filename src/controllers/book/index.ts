import { Request, Response } from "express";
import { Book } from "../../entities/Book";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../db/dbConfig";



const repository = AppDataSource.getRepository(Book);

export async function getAll(req: Request, res: Response) {
    try {
        const books: Book[] = await repository.find();
        res.status(200).json(books);
    } catch (err) {
        console.log("Error getAll books: ", err)
        res.status(500).send("Error getting books");
    }
}

export async function save(req: Request, res: Response) {
    try {
        const { title, author, publisher, genre, location, stock } = req.body;

        let book: Book = new Book()
        book.title = title
        book.author = author
        book.publisher = publisher
        book.genre = genre
        book.location = location
        book.stock = stock
        let a = repository.save(book);
        res.status(201).json(book)
    } catch (err) {
        res.status(500).send("Error saving book: " + err);
    }
}
export async function remove(req: Request, res: Response) {
    try {
        const bookId = req.params.id;
        repository.softDelete(bookId);
        res.status(200).send("Deleted")
    } catch (err) {
        res.status(500).send("Error deleting book: " + err);
    }
}
export async function update(req: Request, res: Response) {
    try {
        const { title, author, publisher, genre, location, stock } = req.body;
        const bookId: number = parseInt(req.params.id);
        let book: Book = await repository.findOneByOrFail({ id: bookId })
        book.title = title
        book.author = author
        book.publisher = publisher
        book.genre = genre
        book.location = location
        book.stock = stock
        repository.save(book);
        res.status(201).json(book)
    } catch (err) {
        res.status(500).send("Error updating book: " + err);
    }
}
