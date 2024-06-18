// Import necessary components
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { P2Ptransactionsrecived } from "../../../components/P2ptransactionrecived";
import { P2Ptransactionssent } from "../../../components/P2ptransactionssent";

async function getp2ptransactions(): Promise<any[]> { // Changed return type to any[]
  const session = await getServerSession(authOptions);

  // Type guard (optional, consider error handling for production)
  if (!session?.user) {
    return []; // Return empty array if session?.user is null
  }

  const recievedtransactions = await prisma.p2pTransfer.findMany({
    where: {
      toUserId: Number(session.user.id),
    },
    include: {
      fromUser: true,
    },
  });

  return recievedtransactions.map((t:any) => ({
    time: t.timestamp,
    amount: t.amount,
    fromuser: t.fromUser.name,
  }));
}

async function getp2psent(): Promise<any[]> { // Changed return type to any[]
  const session = await getServerSession(authOptions);

  // Type guard (optional, consider error handling for production)
  if (!session?.user) {
    return []; // Return empty array if session?.user is null
  }

  const senttransactions = await prisma.p2pTransfer.findMany({
    where: {
      fromUserId: Number(session.user.id),
    },
    include: {
      toUser: true,
    },
  });

  return senttransactions.map((t:any) => ({
    time: t.timestamp,
    amount: t.amount,
    toUser: t.toUser.name,
  }));
}

export default async function handler() {
  const recievedtransactions = await getp2ptransactions();
  const senttransactions = await getp2psent();

  return (
    <div className="w-full">
      <P2Ptransactionsrecived transactions={recievedtransactions} />
      <P2Ptransactionssent transactions={senttransactions} />
    </div>
  );
}
