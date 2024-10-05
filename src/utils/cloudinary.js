// import v2 from "cloudinary"
import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


    cloudinary.config({ 
        cloud_name: 'aman026', 
        api_key: '599465795291355', 
        api_secret: process.env.CLOUDINARY_API_SECRET// Click 'View API Keys' above to copy your API secret
    })

    const uploadFileCloudinary = async (filepath)=>{
        try {
            if(!filepath) return null;//when file path is wrong 
           const uploader = await cloudinary.uploader.upload(filepath,{
                resource_type:'auto'  
                //file is uploading on claudinary 
            })
            fs.unlinkSync(filepath) //unlink the file from server after it upload on cloudinary
            return uploader
        } catch (error) {

            fs.unlinkSync(filepath)
            return null;
            
        }
    }

    export {uploadFileCloudinary}