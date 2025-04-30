import express from "express";
import protectRoute from "../middleware/auth.middleware.js";
import { addBook, deleteBook, editBook, getAllBooks, getUserBooks } from "../controllers/bookController.js";

const router = express.Router();

router.post("/", protectRoute, addBook);
// const response = await fetch("https://localhost:3000/api/books?page=3&limit=5")

// pagination -> infinite loading
router.get("/", protectRoute, getAllBooks);

// get recommended books by the logged in user
router.get("/userId", protectRoute, getUserBooks);

router.post("/userId/:id", protectRoute, editBook);

router.delete("/:id", protectRoute, deleteBook);

export default router;