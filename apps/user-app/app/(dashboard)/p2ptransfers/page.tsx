import { SendCard } from "../../../components/SendCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";
export default async  function() {
  const session = await getServerSession(authOptions);
  if(!session) {
      redirect('/login')
  }   
  return <div className="w-full">
    <SendCard/>
       
  </div>
  
}

