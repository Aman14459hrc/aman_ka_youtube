import mongoose from "mongoose";
import dotenv from "dotenv"
import {DB_NAME} from '../constants.js'
const connectDB = async ()=>{
    try {
      // CONECTING DATABASE 
        const connectionDB = await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`)
        console.log("Connection Build Successfully");
   
        
        
    } catch (error)
     {
        console.log(`dataBase connection error: ${error}`);
        process.exit(0)
        //ANY ERROR OCCURED SHOW HERE
        
    }
}

export default connectDB;