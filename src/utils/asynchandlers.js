// const asyncHandler = () =>{}
export {asyncHandler}

// const asyncHandler = ()=>{()=>{}}   
    // higher order function are those, function which accept the function as argument 


const asyncHandler = (fn)=>async (req,res,next)=>{
    try {
        await fn(req,res,next)
        
    } catch (error) {
        res.status(error.code || 500).json({
            success:"failed",
            message:error.message
        })
        
    }
}