
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
    const number = e.target[0].value;
    const password = e.target[1].value;
   
    if(!isValidPhoneNumber(number)) {
      setError("Invalid phone number");
      return;
    }

    

    const res = await signIn("credentials", {
      redirect: false,
      number,
      password,
    });

    if (res?.error) {
      console.log(res.error);
      setError("Invalid email or password here ");
      if (res?.url) router.replace("/dashboard");
    } else {
      setError("Invalid number or password here ");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (<div>
     
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
    <Link className="text-1xl justify-center   " href={"/register"}>You can test with number: 1111111111 and password:alice !! </Link>
  </div>
</div>
</div>
      )
  );
};



export default Login;
