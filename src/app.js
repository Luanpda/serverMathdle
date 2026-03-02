import express from 'express';
import dbConnect from './config/dbConnect.js';
import routes from './routes/index.js';
import cors from 'cors';

export const app = express();
app.use(cors({
  origin: 'https://seulinkdovercel.vercel.app' 
}));
routes(app);

const conexao = await dbConnect();



