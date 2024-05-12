"use client";
import React, { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import RightDrawer from "@/components/RightDrawer/Drawer";
import Unauthorized from "@/components/Collab/Unauthorized";

function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const searchParams = useSearchParams();
  const snippet = searchParams.get("snippet")
    ? searchParams.get("snippet")
    : "";
  const shared = searchParams.get("shared") ? searchParams.get("shared") : "";

  return (
    <Suspense>
      <div className="">
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
    </Suspense>
  );
}

export default Page;
