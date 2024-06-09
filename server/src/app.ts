
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
const sumForTarget=(array:any,target:any )=>{

  let index1=0
  let index2=0
  for (let i=0;i<array.length-1;i++){
    
  for(let j=1;j<array.length;j++){
    if(array[i]+array[j]===target){
      index1=i
      index2=j
      return {index1,index2}
    }
  }
  }


}
const array=[1,2,3,4]
let target = 5;
sumForTarget(array,target);
app.use(cors(corsOption)); 
app.use('/api',router);
app.get("/",(req:Request,res:Response)=>{
  res.send("is great")
})
app.listen(3001, () => {
  console.log("3001");
});

