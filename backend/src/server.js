import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

console.log(process.env.MONGO_URI);

const app  = express(); 
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(rateLimiter);
app.use('/api/notes', notesRoutes);

connectDB().then(() => {
   app.listen(PORT, () => { 
    console.log(`Server is running on PORT: ${PORT}`);
    });
});
