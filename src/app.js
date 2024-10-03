import dotenv from 'dotenv';
dotenv.config()
import express from 'express'
const app = express()
import connectDB from './db/DB.js';
import cors from "cors"
import cookieParser from 'cookie-parser';
const PORT = 3000
app.use(cors({
    credentials:true
})) 
app.use(express.json({limit:"20kb"}))
app.use(express.static("public"))
app.use(cookieParser())


app.get("/",(req,res)=>{
    res.send("Exceuted...!")
})
connectDB()

app.listen(PORT,()=>{
    console.log(`port ${PORT} has been connected`);
    
})
export {app}

