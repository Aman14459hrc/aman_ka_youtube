import dotenv from 'dotenv';
dotenv.config()
import express  from 'express'
import router from './routes/user.route.js';
const app = express()

import connectDB from './db/DB.js';
import cors from "cors"
import cookieParser from 'cookie-parser';
const PORT = process.env.PORT

app.use(cors({
    credentials:true
})) 
app.use(express.json({limit:"20kb"}))
app.use(cookieParser())
app.use('/api/user',router)


app.get("/",(req,res)=>{
    res.send("Exceuted...!")
})
connectDB()

app.listen(PORT,()=>{
    console.log(`port ${PORT} has been connected`);
    
})

