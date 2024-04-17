"use client";

import { useState } from "react";
import CodeBlock from "./CodeBlock";
import SnippetSection from "../snippet/snippet";

const RightDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    // setIsOpen(!isOpen);
    setIsOpen(true);
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className=" bg-black text-white rounded-xl hover:bg-black hover:text-white hover:duration-300 p-2 transition-all duration-300 ease-in-out border-2 border-black hover:border-white"
      >
       
        <SnippetSection  setIsOpen={setIsOpen}  />
        
      </div>
      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-1/2 bg-zinc-800 transition-all duration-300">
          <div className="p-4">
            Drawer content goes here
            <h2 className="text-xl font-bold text-white">
              Sub Category Heading
            </h2>
            <h2 className="text-zinc-100/70 text-sm py-2 mb-2">File Count</h2>
            <CodeBlock />
          </div>
        </div>
      )}
    </div>
  );
};

export default RightDrawer;
