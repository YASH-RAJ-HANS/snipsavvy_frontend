"use client";

import { useState,useEffect } from "react";
import CodeBlock from "./CodeBlock";
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react'
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
      {/* <div
        className=" bg-black text-white rounded-xl hover:bg-black hover:text-white hover:duration-300 p-2 transition-all duration-300 ease-in-out border-2 border-black hover:border-white"
      >
       
      </div> */}
      {isOpen && (
        <div className="fixed top-16 right-0 h-full w-1/2 bg-black transition-all duration-300">
          <div className="p-4">
            Drawer content goes here snippet id-  {snippet}
            <h2 className="text-xl font-semibold leading-2 text-white">
              Sub Category Heading
            </h2>
              <input placeholder="Snippet Description..." className="text-black bg-zinc-800 rounded-lg px-3 py-1 my-4 w-[90%]"></input>
            <CodeBlock />
          </div>
        </div>
      )}
    </div>
    )
  );
};

export default RightDrawer;
