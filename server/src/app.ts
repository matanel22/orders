
import express from 'express';
import cors from "cors";
import { Request,Response } from 'express';
import router from './routes';

const app = express();

app.use(express.json());

const corsOption = {
  origin:'http://localhost:3000', 
  credentials:true,
  method: ["GET","POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type", "x-api-key"],
};

app.use(cors(corsOption)); 

app.use('/api',router);


app.get("/",(req:Request,res:Response)=>{
  
  res.send("is great")
})
app.listen(3001, () => {
  console.log("3001");
});

