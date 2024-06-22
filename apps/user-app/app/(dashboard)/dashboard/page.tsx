import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"
import { redirect } from "next/navigation";
export default function() {
    const session=getServerSession(authOptions);
    
            if(!session)  {
                redirect('/login');
                return <div>
                    Please login
                </div>
            }
     return <div>
        Dashboard whatt

    </div>
}