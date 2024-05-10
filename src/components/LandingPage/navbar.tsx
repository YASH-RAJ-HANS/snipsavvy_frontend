"use client";
import React from "react";
import { Logo } from "./Logo";
import { Button } from "@/components/LandingPage/Button";
import { signIn, useSession } from "next-auth/react";

function Navbar() {
  const session = useSession();
  const handleSignInGoogle = () => {
    signIn("google");
    if (session.status == "authenticated") {
      localStorage.setItem("User Name", `${session.data.user?.name}`);
      localStorage.setItem("User Profile Url", `${session.data.user?.image}`);
    }
  };
  const handleSignInGithub = () => {
    signIn("github");
    if (session.status == "authenticated") {
      localStorage.setItem("User Name", `${session.data.user?.name}`);
      localStorage.setItem("User Profile Url", `${session.data.user?.image}`);
    }
  };
  return (
    <div className="border-b border-zinc-600 text-white font-bold px-2 pt-2 bg-black flex flex-row justify-around">
      <Logo className="text-3xl mt-2" />
      <div className="flex flex-row gap-5">
        <button onClick={handleSignInGoogle}>Sign in with Google</button>
        <button onClick={handleSignInGithub}>Sign In With Github</button>
      </div>
    </div>
  );
}

export default Navbar;
