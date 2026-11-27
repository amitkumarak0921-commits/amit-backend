import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
  })
);
  
  //parse JSON and put it in req.body()
  app.use(express.json({ limit: "16kb" }));

  //parse form-style and put it in req.body
  app.use(express.urlencoded({ extended: true, limit: "16kb" }));

  //make file available to the browser
  app.use(express.static("public"));

  //for every request parser the cookie and put them on req.cookie
  app.use(cookieParser());

  //ROUTES import
  import userRouter from './routes/user.routes.js'

  //routes declartion 
  app.use("/api/v1/user", userRouter)
export default app;  