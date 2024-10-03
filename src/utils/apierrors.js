class Apierror extends Error{
    constructer(statuscode,message = "something went wrong",error=[],stack=""){
super(message)
 this.statuscode = statuscode,
 this.data = null,
 this.message = message,
 this.success = false,
 this.error = error
 // have to read itself below code 
        if(stack){
            this.stack= stack
        }else{
            Error.captureStackTrace(this,this.constructer)
        }
    }
}

export {Apierror}