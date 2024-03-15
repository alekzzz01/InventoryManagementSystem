import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config()
import { UserRouter } from './routes/user.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/auth', UserRouter)

mongoose.connect('mongodb+srv://testdevelopment:4epsMs2WtXpCKC3e@cluster0.zhez8pl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/authentication')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


  app.listen(process.env.PORT, () =>  {
    console.log(`Server is running on port ${process.env.PORT}`);
});
