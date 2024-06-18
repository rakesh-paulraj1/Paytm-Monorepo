"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";



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
  await prisma.$transaction(async(tx:any)=>{
    await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId"=${Number(from)} FOR UPDATE`;
    //THE ABOVE LINE WILL LOCK THIS TRANSACTION THAT RUNS ONLY IN SEQUENTIAL MANNER
    const frombalance=await tx.balance.findUnique({
        where:{userId:Number(from)}
    });
    if(!frombalance|| frombalance.amount<amount){
      return {
        error:"Insufficient balance"
      }
    }
    await tx.balance.update({
        where:{userId:Number(from)}, 
        data:{amount:{decrement:amount}}
    })
    await tx.balance.update({
        where:{userId:touser.id},
        data:{amount:{increment:amount }}
    });
    await tx.p2pTransfer.create({
      data: {
        fromUserId:Number(from),
        toUserId:Number(touser.id),
        amount,
        timestamp:new Date()
      }
    })
})

}