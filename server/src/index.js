import express, { Router } from "express";
import connectDb from "./db/index.js";
import 'dotenv/config'
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/route.js"

const app= express();
app.use(cookieParser());
const port=process.env.PORT;
const corsOption = {
    credentials: true,
    origin:"http://localhost:5173",
};

app.use(cors(corsOption));
app.use(express.json());

connectDb();
app.use("/", authRoutes);
app.listen(port,()=>{
    console.log(`App is listening on port:http://localhost:${port}`)
})