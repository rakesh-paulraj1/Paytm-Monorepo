"use client"
import { getServerSession } from "next-auth";
import { AuthOptions } from "next-auth";
import prisma from "@repo/db/client";
import { authOptions } from "../auth";


export async function p2ptransfer(to:string,amount:number) {
    const session =await getServerSession(authOptions);
 const from=session?.user?.id;
  if(!from){
    return {
      error:"You are not logged in"
    }
  }
  const touser=await prisma.user.findFirst({
    where:{
      number:to
    }
  });
  if(!touser){
    return {
      error:"The sender does not exist does not exist"
    }
  }
  await prsima.$transactions(async(tx)=>{
    const frombalance=await tx.balance.findUnique({
        where:{userid:Number(from)}
    });
    if(!frombalance|| frombalance.amount<amount){
      return {
        error:"Insufficient balance"
      }
    }
    await tx.balance.update({
        where:{userid:Number(from)},
        data:{amount:{decrement:amount}}
    })
    await tx.balance.update({
        where:{userid:touser.id},
        data:{amount:{increment:amount }}
    });
})

}