import json from"../jsonData/data.json"
import { Request,Response } from "express"

export const sendData=(req:Request,res:Response)=>{
try {
  return  res.send(json)
} catch (error) {
    return res.status(500)
}
}