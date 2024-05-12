"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import RightDrawer from "@/components/RightDrawer/Drawer";
import Unauthorized from "@/components/Collab/Unauthorized";
import Image from "next/image";

function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const searchParams = useSearchParams();
  const snippet = searchParams.get("snippet")
    ? searchParams.get("snippet")
    : "";
  const shared = searchParams.get("shared") ? searchParams.get("shared") : "";

  return (
    <div className="">
      <Image
          src="/logo.png"
          width={80}
          height={80}
          alt="logo"
          className="pt-6 pl-4 pb-4 opacity-80"
        />
      {snippet && shared === "true" ? (
        <div className="">
          <RightDrawer
            className="fixed top-0"
            isOpen={!isOpen}
            setIsOpen={setIsOpen}
            isEditable={isEditable}
            setIsEditable={setIsEditable}
            shared={shared}
          />
        </div>
      ) : (
        <Unauthorized />
      )}
    </div>
  );
}

export default Page;
