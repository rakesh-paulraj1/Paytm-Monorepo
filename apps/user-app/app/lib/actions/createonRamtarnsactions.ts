"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function createOnRamptarnsactions(
  amount: number,
  provider: string
) {
  const session = await getServerSession(authOptions);
  //this token is generated form the the bank this is used for verification of the amount we sent
 const token=Math.random().toString();
    const userId = session.user.id;
   if(!userId){
    return {
        message:"User Not logged In"
    }
   }
   await prisma.onRampTransaction.create({
    data:{
         userId:Number(userId),
         amount:amount,
         status:"Processing",
         provider:provider,
         startTime:new Date(),
         token:token
    }
   });
  return {
    message:"Created Onramptransactions"
  } 
}
