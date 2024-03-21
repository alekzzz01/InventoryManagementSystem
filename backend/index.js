import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config()
import { UserRouter } from './routes/user.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cors(
  {
    origin: ["http://localhost:3000"],
    credentials: true
  }
))
app.use(cookieParser())
app.use('/auth', UserRouter)

const dbURI = `mongodb+srv://testdevelopment:4epsMs2WtXpCKC3e@cluster0.zhez8pl.mongodb.net/InventorySystem?retryWrites=true&w=majority&appName=Cluster0/authentication`;

mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


  app.listen(process.env.PORT, () =>  {
    console.log(`Server is running on port ${process.env.PORT}`);
});
