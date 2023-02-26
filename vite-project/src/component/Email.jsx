import React,{useState} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Email = () => {

    const [email,setemail] =useState("")
    const navigate =useNavigate()


    const sendotp =async()=>{
        const result =await axios.post("http://localhost:3000/sendotp",{email})
        console.log(result);
        navigate("/otp",{state:email})
    }



  return (
    <div>
      <h1 className="text-xl font-bold mt-[12rem] ml-[15rem] ">Enter Email</h1>
      <div className="flex flex-col  ml-[15rem]">
        <input
          type="text"
          placeholder="enter your Email"
          onChange={(e)=>setemail(e.target.value)}
          className="border-4 border-solid bg-gray-100 border-blue-900 rounded-sm w-[22rem] text-center"
        />
        <button className="border-2 border-blue-900 rounded-md bg-black text-white font-extrabold w-[08rem] text-center mt-5 ml-[6rem]"
            onClick={sendotp}>
          Generate otp
        </button>
      </div>
    </div>
  );
};

export default Email;
