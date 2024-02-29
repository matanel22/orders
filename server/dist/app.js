"use strict";
// require ('./db/connectMongo')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import  router  from './routes';
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const corsOption = {
    origin: 'http://localhost:3000',
    credentials: true,
    method: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "x-api-key"],
};
app.use((0, cors_1.default)(corsOption));
// app.use('/api/routs/router',router);
// app.use('/api',router);
app.get("/", (req, res) => {
    console.log("11111111");
    res.send("is great");
});
app.listen(3001, () => {
    console.log("3001");
});
