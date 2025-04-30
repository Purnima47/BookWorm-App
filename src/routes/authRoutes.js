import express from "express";
import 'dotenv/config';
import { deleteUser, loginUser, registerUser } from "../controllers/userController.js";
import protectRoute from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.delete('/:id', protectRoute, deleteUser);

export default router;