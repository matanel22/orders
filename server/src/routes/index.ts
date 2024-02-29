import express from 'express';
import { sendData } from './SendData';

 const router = express.Router();

router.get("/sendData",sendData)


export default router