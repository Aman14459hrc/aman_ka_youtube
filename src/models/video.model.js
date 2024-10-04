import mongoose from "mongoose";
const videoSheama = new mongoose.Schema({
    videofile:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,

    },
    Tittle:{
        type:String,
        required:true,
        unique:true,
        length:"100",
        Default:"Untittled video "
    },
    dsecription:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        
    },
    views:{
        type:Number,
        default:'0'
    },
    Ispublished:{
        type:Boolean,
        default:true,
        required:true
    }

},{
    timestamps:true
})

export default videomodel = mongoose.model("videomodel",videoSheama)