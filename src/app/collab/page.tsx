"use client";
import React, { Suspense, useState } from "react";
import Collab from "./collab";

function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  return (
    <div className="">
      <Suspense fallback={<div>Loading...</div>}>
        {/* Render the Client Component */}
        <Collab
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isEditable={isEditable}
          setIsEditable={setIsEditable}
        />
      </Suspense>
    </div>
  );
}

export default Page;
