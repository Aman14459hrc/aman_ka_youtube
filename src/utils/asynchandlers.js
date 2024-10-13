// const asyncHandler = () =>{}
    
    // const asyncHandler = ()=>{()=>{}}   
        // higher order function are those, function which accept the function as argument 
        
        
        const asyncHandler = (fn)=>async (req,res,next)=>{
            try {
                return await fn(req,res,next)
                
            } catch (error) {
                res.status(error.status|| 500).json({
                    success:"failed",
                    message:error.message || "something went wrose "
                })
                
            }
        }
        export {asyncHandler}