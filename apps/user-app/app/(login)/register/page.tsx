
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { register } from "../../lib/register";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");

 



  const isValidPhoneNumber = (phoneNumber:string) => {
   
    const phoneRegex = /^\d{10}$/; 
    
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const phoneNumber = e.target[1].value;
    const password = e.target[2].value;
 
   
    if(!isValidPhoneNumber(phoneNumber)) {
      setError("Invalid phone number");
      return;
    }

    

    const res = await register(name,phoneNumber,password);

    if (res?.error) {
      console.log(res.error);
      setError("Invalid email or password here ");
      
    } 
    if (res.success) router.push("/login");
  }

  return (
    
<div className="bg-grey flex items-center justify-center min-h-screen">
  <div className="bg-[#ebe6e6] p-8 rounded-lg shadow-md w-96">
    <h1 className="text-4xl text-center font-semibold mb-8">Register</h1>
    <form onSubmit={handleSubmit}>
    <input
        type="Name"
        className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
        placeholder="Name"
        required
      />
      <input
        type="text"
        className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
        placeholder="Number"
        required
      />
      
      <input
        type="password"
        className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
        placeholder="Password"
        required
      />
      <button
        type="submit"
      
        className=" w-full px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
      >
        Sign In
      </button>
    
      <p className="text-red-600 text-[16px] mt-4">{error && error}</p>
    </form>
    <Link className="text-1xl justify-center   " href={"/login"}>Already a user? Login!! </Link>
  </div>
</div>

      )
};



export default Login;
