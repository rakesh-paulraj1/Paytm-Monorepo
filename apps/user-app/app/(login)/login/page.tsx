
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@repo/ui/button";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const {  status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const isValidPhoneNumber = (phoneNumber:string) => {
   
    const phoneRegex = /^\d{10}$/; 
    
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const phoneNumber = e.target[0].value;
    const password = e.target[1].value;
   
    if(!isValidPhoneNumber(phoneNumber)) {
      setError("Invalid phone number");
      return;
    }

    

    const res = await signIn("credentials", {
      redirect: false,
      phoneNumber,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/dashboard");
    } else {
      setError("Invalid number or password");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
<div className="bg-grey flex items-center justify-center min-h-screen">
  <div className="bg-[#ebe6e6] p-8 rounded-lg shadow-md w-96">
    <h1 className="text-4xl text-center font-semibold mb-8">Login</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
        placeholder="Email"
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
  </div>
</div>

      )
  );
};



export default Login;
