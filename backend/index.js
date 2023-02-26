const express =require("express")
const app =express()
const cors =require("cors")
const Userotp =require("./database")
const nodemailer =require("nodemailer")


const transporter =nodemailer.createTransport({
    service:"gmail",
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:"gtest3681@gmail.com",
        pass:"jbiwkldgooalvtgj"
    }
})

app.use(express.json())
app.use(cors())


// this route for send otp on email id

app.post("/sendotp",async(req,res)=>{
    const {email} =req.body
    const OTP =Math.floor(100000 +Math.random()*90000000)
    const  emailexist = await Userotp.findOne({email:email})
    if(emailexist){
        const updateotp =await Userotp.findByIdAndUpdate({_id:emailexist._id},{
            otp:OTP
        },{new:true})
          const saveupdateotp =await updateotp.save();
 
         const mailOptions ={
            from:"gtest3681@gmail.com",
            to:email,
            text:`otp:-${OTP}`
         }

         transporter.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error);
                res.status(400).json({error:"email not send"})
            }
            else{
                console.log(info.response);
                res.status(200).json({message:"email send"})
            }
         })
    }
    else{

          const newuser =new Userotp({email,otp:OTP})
          const usersave =await newuser.save();
          const mailOptions ={
            from:"gtest3681@gmail.com",
            to:email,
            text:`otp:-${OTP}`
         }

         transporter.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error);
                res.status(400).json({error:"email not send"})
            }
            else{
                console.log(info.response);
                res.status(200).json({message:"email send"})
            }
         })
    }
})


// this route for verify enter otp by user

app.post("/otpverify",async(req,res)=>{

    const {otp,email} =req.body

     const data =await Userotp.findOne({email:email})
     if(data.otp ===otp){
        res.status(200).json({message:"user verify succesfulll"})
     }
     else{
        res.status(400).json({error:"user verification failed"})

     }


})




app.listen(3000,()=>{
    console.log("server runing on port3000");
})