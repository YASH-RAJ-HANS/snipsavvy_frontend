"use client";

import { useState,useEffect } from "react";
import CodeBlock from "./CodeBlock";
import { useSearchParams } from "next/navigation";
// import { Suspense } from 'react'
const RightDrawer = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  const searchParams = useSearchParams();

  const snippet = searchParams.get("snippet")
    ? searchParams.get("snippet")
    : "";


  const toggleDrawer = () => {
    // setIsOpen(!isOpen);
    setIsOpen(true);
  };

  return (
    
    snippet && 
    (
      <div className="flex items-center justify-center">
      {isOpen && (

        <div className="fixed top-16 right-0 min-h-full w-1/2 bg-zinc-900 shadow-lg shadow-zinc-700 border-l-1 border-black transition-all duration-300" style={{ maxHeight: '600px', overflow: 'auto' }}>
          <div className="p-4 overflow-auto">
            {/* Drawer content goes here

        <div className="fixed top-16 right-0 h-full w-1/2 bg-black transition-all duration-300 z-10">
          <div className="p-4">
            Drawer content goes here snippet id-  {snippet}

            <h2 className="text-xl font-semibold leading-2 text-white">
              Sub Category Heading
            </h2>
              <input placeholder="Snippet Description..." className="text-black bg-zinc-800 rounded-lg px-3 py-1 my-4 w-[90%]"></input> */}
            <CodeBlock />
          </div>
        </div>
      )}
    </div>
    )
    
  );
};

export default RightDrawer;
