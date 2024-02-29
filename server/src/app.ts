
// require ('./db/connectMongo')

// import  router  from './routes';
import express from 'express';
import cors from "cors";
import { Request,Response } from 'express';
const app = express();

app.use(express.json());

const corsOption = {
  origin:'http://localhost:3000', 
  credentials:true,
  method: ["GET","POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type", "x-api-key"],
};

app.use(cors(corsOption)); 
// app.use('/api/routs/router',router);
// app.use('/api',router);


app.get("/",(req:Request,res:Response)=>{
  console.log("11111111");
  res.send("is great")
})
app.listen(3001, () => {
  console.log("3001");
});

