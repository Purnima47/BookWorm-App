import express from 'express';
import 'dotenv/config'
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import { connectDB } from './lib/db.js';
import job from './lib/cron.js';

const app = express();
const PORT = process.env.PORT || 3000;


job.start();
app.use(cors());
// parse the json data
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
