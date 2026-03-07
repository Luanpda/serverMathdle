// import http from "http";
import  'dotenv/config.js';
import {app} from './src/app.js';

const PORT = process.env.PORT;



app.listen(PORT, () => {
  console.log("servidor escutando!");
});
