import mongoose from 'mongoose';
import 'dotenv/config';

export const connectDB = async () => {
    //  console.log("🔍 MONGO_URL from .env:", process.env.MONGO_URL);
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Database connected ${conn.connection.host}`);
    } catch (error) {
        console.log('Error connecting to database', error);
        process.exit(1); // exit with failure
    }
}