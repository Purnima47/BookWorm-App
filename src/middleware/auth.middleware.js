import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import 'dotenv/config';

// const response = await fetch(`http://localhost:3000/api/books`, {
//     method: "POST",
//     body: JSON.stringify({
//         title,
//         caption
//     }),
//     headers: { Authorization: `Bearer ${token}` },
// })
// The data of jwt token come with Bearer so we have to replace it.


const protectRoute = async (req, res, next) => {
    try {
        // get token
        const authHeader = req.header("Authorization");
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No authentication token, access denied" });
        }
        const token = authHeader.split(" ")[1]; // clean and reliable

        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(401).json({ message: "Token is not valid" });
        }

        req.user = user;
        next();

    } catch (error) {
        console.log("Authentication error ", error.message);
        return res.status(401).json({ message: "Token is not valid" });
    }
}

export default protectRoute;