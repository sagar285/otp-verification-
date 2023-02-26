const mongoose =require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/otp").then(()=>{
    console.log("connection succefull");
}).catch((e)=>{
    console.log(e);
})

const Schema =new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true 
    }
})


const Userotp =mongoose.model("userotp",Schema)

module.exports =Userotp;