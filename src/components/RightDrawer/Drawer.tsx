"use client";

import { useState,useEffect } from "react";
import CodeBlock from "./CodeBlock";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { MdCancel } from "react-icons/md";
// import { Suspense } from 'react'

interface Props {
  isOpen: boolean;
  setIsOpen: any;
  isEditable: boolean;
  setIsEditable: any;
}
const RightDrawer = ({isOpen, setIsOpen, isEditable, setIsEditable }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter()
  const pathName = usePathname()
  const snippet = searchParams.get("snippet")
    ? searchParams.get("snippet")
    : "";

  const collection = searchParams.get("collection")
    ? searchParams.get("collection")
    : "";

  const updateUrl = () => {
    const nextSearchParams = new URLSearchParams(searchParams.toString());
    nextSearchParams.delete("snippet");
    router.push(`${pathName}?${nextSearchParams.toString()}`);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  }

  return (
    
      <div className="flex items-center justify-center">
      {isOpen ? 

        <div className="fixed top-16 right-0 min-h-full w-1/2 bg-zinc-900 shadow-lg shadow-zinc-700 border-l-1 border-black transition-all duration-300" style={{ maxHeight: '600px', overflow: 'auto' }}>
          <div className="p-4 overflow-auto">
            {snippet ? <button className="absolute top-2 right-2 text-white text-2xl" onClick={updateUrl}>
              <MdCancel />
            </button> : <button className="absolute top-2 right-2 text-white text-2xl" onClick={closeDrawer}>
              <MdCancel />
            </button>}
            <CodeBlock isEditable={isEditable} setIsEditable={setIsEditable}/>
          </div>
        </div>
      : null} 
    </div>
    )
};

export default RightDrawer;
