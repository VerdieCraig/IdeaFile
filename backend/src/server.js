import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

console.log(process.env.MONGO_URI);

const app  = express(); 
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

if(process.env.NODE_ENV !== 'production') {
    app.use(cors()); // Enable CORS for all routes
}

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(rateLimiter);
app.use('/api/notes', notesRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname,'../frontend/dist')));

  app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname,'../frontend','dist','index.html'));
  });
}

connectDB().then(() => {
   app.listen(PORT, () => { 
    console.log(`Server is running on PORT: ${PORT}`);
    });
});
