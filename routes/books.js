import { Router } from "express";
import db from "../utils/database.js"
import { bookValidationSchema, bookUpdateSchema } from "../utils/bookValidationSchema.js";
import {matchedData, validationResult, checkSchema, query} from "express-validator";

const router=Router()

const books=db.books;

const resolveIndexByBookId = (req, res, next) => {
  const {
    params: { id },
  } = req;

  const parseID = parseInt(id);
  if (isNaN(parseID)) return res.sendStatus(400);

  const bookIndex = books.findIndex((book) => book.id === parseID);
  if (bookIndex === -1) return res.sendStatus(404);
  req.bookIndex = bookIndex;
  next();
};

router.get(
  "/books",
  query("title").optional().isString().isLength({ min: 2 }).withMessage("Title must have at least 2 characters"),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { title } = req.query;
    if (!title) return res.json(books);

    const filtered = books.filter(b => b.title.toLowerCase().includes(title.toLowerCase()));
    res.json(filtered);
  }
);

router.get("/books/:id",(req,res)=>{
    const {
    params: { id },
  } = req;

  const parseID = parseInt(id);
  if (isNaN(parseID)) return res.sendStatus(400);

  const bookIndex = books.findIndex((book) => book.id === parseID);
  if (bookIndex === -1) return res.sendStatus(404);
  req.bookIndex = bookIndex;
  res.send(books[req.bookIndex]);
})

router.post("/books",checkSchema(bookValidationSchema),(req, res)=>{
    const result = validationResult(req);
    if (!result.isEmpty())
      return res.status(400).send({ errors: result.array() });

    const data = matchedData(req);
    const newBook = { id: books.length + 1, ...data };
    books.push(newBook);
    res.status(201).send(newBook);
})

router.put("/books/:id",checkSchema(bookUpdateSchema),resolveIndexByBookId,(req, res)=>{
    const { body } = req;
    books[req.bookIndex] = { id: books[req.bookIndex].id, ...body };
    res.status(200).send(books[req.bookIndex]);
})

export default router;
