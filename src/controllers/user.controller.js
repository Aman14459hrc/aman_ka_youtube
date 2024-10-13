import { asyncHandler } from "../utils/asynchandlers.js";
import {Apierror } from "../utils/apierrors.js"
import { Apiresponse } from "../utils/apiresponse.js"
import { uploadFileCloudinary } from "../utils/cloudinary.js"
import { User } from "../models/user.models.js";
 
const userRegister = asyncHandler(async (req,res)=>{
  //some function is providing a callback function init for arrays 
const {username,Email,fullName,avtar,coverimage,password} = req.body;
    if([username, Email, fullName , password].some((ele)=>ele?.trim()=="")){
        throw new Apierror(401,"all field are complulary ");

    }

   const Existeduser =  await User.findOne({
        $or:[{Email},{username}]
    })
if (Existeduser) {
    throw new Apierror(402,"allready registered");
    
}
if(!avtar){
    throw new Apierror(403,"avtar not found ")
}
if(!coverimage){
    throw new Apierror(404,"coverimage is not given  ")
}

const avtarLocalPath = req.files?.avtar[0]?.path
const coverLocalPath = req.files?.coverimage[0]?.path
if (!avtarLocalPath) {
    throw new Apierror(403,"avtar image not found ");
    
}
if (!coverLocalPath) {
    throw new Apierror(404,"cover image not found  ")
}
   const avtarUpload = await uploadFileCloudinary(avtarLocalPath)
   const coverUpload = await uploadFileCloudinary(coverLocalPath)

 await   User.create({
    fullName,
    username,
    avtar:avtar.url,
    password,
    Email,
    coverimage:coverimage?.url || " ",

   })

   const create = await User.findById(user._id).select("-password -refreshToken")
if (!create) {
    throw new Apierror(405,"user NOT created succesfully ")
}

return res.status(200).json({
    msg : "use created successfully "}
)
  

})

export {userRegister}