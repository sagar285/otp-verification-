import React,{useState} from "react";
import axios from "axios"
import { useLocation,useNavigate } from "react-router-dom";

const Otp = () => {
    const [otp,setotp] =useState("")
    const location =useLocation();
    const navigate =useNavigate();


    const otpverify =async()=>{
        const result = await axios.post("http://localhost:3000/otpverify",{otp,email:location.state})
        console.log(result);
        navigate("/page");

    }

  return (
    <div>
      <h1 className="text-xl font-bold mt-[12rem] ml-[15rem] ">Enter OTP</h1>
      <div className="flex flex-col  ml-[15rem]">
        <input
          type="text"
          placeholder="enter your OTP"
          onChange={(e)=>setotp(e.target.value)}
          className="border-4 border-solid bg-gray-100 border-blue-900 rounded-sm w-[22rem] text-center"
        />
        <button className="border-2 border-blue-900 rounded-md bg-black text-white font-extrabold w-[08rem] text-center mt-5 ml-[6rem]"
            onClick={otpverify}>
          Submit otp
        </button>
      </div>
    </div>
  );
};

export default Otp;
