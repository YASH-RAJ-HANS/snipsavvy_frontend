"use client"
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect } from "react"
interface ButtonProps{
    description: string
}
export function SignUpButton({description}: ButtonProps) {

    const session = useSession();
    useEffect(() => {
      if (session && session.status === "authenticated") {
        redirect("/workspace");
      }
    }, [session]);
    const handleSignInGoogle = async () => {
      await signIn("google", { callbackUrl: "http://localhost:3000/workspace" });
    };
    return <button onClick={()=>handleSignInGoogle()} className="px-3 py-2 bg-white text-black font-semibold rounded-3xl glow-gradient">{description}</button>
}