import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes.js';
//import expressAsyncHandler from 'express-async-handler';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.get('/', function (req, res) {
  //when we get an http get request to the root/homepage
  console.log('home private route');
  res.send('Hello World 201b153');
});

app.use('/api/users', userRouter);


app.post('/home', async (req, res) => {
  console.log('home private route');
  res.status(202).send('Private Protected Route - 201b153 Home');
});
app.get('/home', async (req, res) => {
  console.log('home private route');
  res.status(202).send('Private Protected Route - 201b153 Home');
});
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });
  
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
  });