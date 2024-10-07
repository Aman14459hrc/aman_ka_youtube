import { asyncHandler } from "../utils/asynchandlers.js";


const userRegister = asyncHandler(async (req,res)=>{
    res.status(200).json({
        'statuscode' :'200',
        'message':'user register succesfully '
    })
})

export {userRegister}