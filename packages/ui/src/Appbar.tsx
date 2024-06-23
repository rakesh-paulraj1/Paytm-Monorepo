import { Button } from "./button";
import {  signOut } from "next-auth/react";


export const  Appbar = () => {
    return <div className="flex justify-between border-b px-4 border-slate-300">
        <div className="text-lg font-bold flex flex-col justify-center">
            Payments App
        </div>
        <div className="flex flex-col justify-center pt-2">
            <Button onClick={signOut}> Logout </Button>
        </div>
    </div>
}