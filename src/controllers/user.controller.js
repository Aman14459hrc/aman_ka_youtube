import { asyncHandler } from "../utils/asynchandlers.js";
import {Apierror } from "../utils/apierrors.js"
import { Apiresponse } from "../utils/apiresponse.js"
import { uploadFileCloudinary } from "../utils/cloudinary.js"
import { User } from "../models/user.models.js";
 
const userRegister = asyncHandler(async (req,res)=>{
  //some function is providing a callback function init for arrays 
const {username,Email,fullName,avtar,coverimage,password} = req.body;
    if([username, Email, fullName , password].some((ele)=>ele?.trim()=="")){
        throw new Apierror(400,"all field are complulary ");
        

    }
    else{
        throw new Error("name filed ");
        
    }

  

})

export {userRegister}