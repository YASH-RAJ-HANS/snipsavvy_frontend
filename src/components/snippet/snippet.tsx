"use client";
import React from "react";
import { useState } from "react";
import SnippetCard from "../Utils/Snippet_Card/Card";

interface SnippetSectionProps {
  
  setIsOpen: any;
 
}


const SnippetSection: React.FC<SnippetSectionProps> = ({  setIsOpen}) =>{
  const [openSnippet, setIsOpenSnippet] = useState<boolean>(false);
  const handleSnippet = () => {
    setIsOpen(true)
    
    setIsOpenSnippet(true)
  }
  const cardData = [
    { title: "LeetCode", content: "Coding platform with alg" },
    { title: "Snippet", content: "Reusable code snippet rep" },
    { title: "LeetCode", content: "Improve coding skills by s" },
    { title: "Snippet", content: "Store and share useful co" },
  ];
  return (
    <div style={{ minHeight: "100vh" }} className="h-screen-full">
      <div style={{ maxWidth: "75vw" }} className="flex flex-col ">
        <div className="text-xl pl-4 mb-4">Get Started with Snippets</div>

        <div className="flex">
          <div
            className={`${openSnippet ? "w-1/3 " : "w-full"} flex flex-wrap  justify-around items center`}
          >
            {cardData.map((card, index) => (
              <button onClick={() => handleSnippet()}>
                <SnippetCard key={index} {...card} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default SnippetSection;
