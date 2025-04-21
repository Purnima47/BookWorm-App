import express from "express";
import User from '../models/User.js'
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const router = express.Router();

const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "15d" });
}

router.post("/register", async (req, res) => {
    try {
        console.log("HEADERS", req.headers);
        console.log("Incoming body:", req.body); 
        const { email, username, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password should be atleast 6 characters long" });
        }

        if (username.length < 3) {
            return res.status(400).json({ message: "Username should be atleast 3 characters long" });
        }

        // Check if user already exists
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: "Username already exists" });
        }

        // get random avatar
        const profileImage = `https://api.dicebear.com/9.x/avataars/png?seed=${username}`

        const user = new User({
            email,
            username,
            password,
            profileImage,
        })

        await user.save();

        const token = generateToken(user._id);

        // 201 -> resource has been created
        res.status(201).json({
            token,
            user: {
                id: user._id,
                email: user.email,
                username: user.username,
                profileImage: user.profileImage,
            }
        })

    } catch (error) {
        console.log("Error in the register route", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User does not exists" });
        }

        // Check the password is correct or not
        const isPasswordCorrect = await user.comparePassword(password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = generateToken(user._id);

        // 201 -> resource has been created
        res.status(201).json({
            token,
            user: {
                id: user._id,
                email: user.email,
                username: user.username,
                profileImage: user.profileImage,
            }
        })

    } catch (error) {
        console.log("Error in the login route", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

export default router;