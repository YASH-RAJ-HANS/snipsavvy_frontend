"use client";
import React from "react";
import { useState } from "react";
import SnippetCard from "../Utils/Snippet_Card/Card";

export default function SnippetSection() {
  const [opencategory, setIsOpenCategory] = useState<boolean>(false);
  const [openSnippet, setIsOpenSnippet] = useState<boolean>(false);
  const cardData = [
    { title: "LeetCode", content: "Coding platform with algorithmic challenges and online judge." },
  { title: "Snippet", content: "Reusable code snippet repository for common programming tasks." },
  { title: "LeetCode", content: "Improve coding skills by solving coding problems interactively." },
  { title: "Snippet", content: "Store and share useful code snippets for programming projects." },
  { title: "LeetCode", content: "Access hundreds of coding challenges for various skill levels." },
  { title: "Snippet", content: "Discover and contribute to a collection of code snippets." },
  { title: "LeetCode", content: "Practice coding with real-world problems and interview questions." },
  ];
  return (
    <div style={{ width: "90vw" }} className="flex w-full">
      <div style={{ border: "" }} className="flex ">
        <div style={{ width: "25vw" }} className="flex">
          <button onClick={() => setIsOpenCategory(true)}>"-&"</button>
          {opencategory && <div style={{ width: "14vw" }}>Categories</div>}
        </div>
      </div>
      <div style={{ maxWidth: "75vw" }} className="flex flex-col ">
        <div className="text-xl pl-4 mb-4">Get Started with Snippets</div>
        {openSnippet ? (
          <div className="flex">
            <div className="w-1/3 flex flex-wrap  justify-around items center">
              {cardData.map((card, index) => (
                
                  <SnippetCard key={index} {...card} />
                
              ))}
            </div>
            <div
              style={{ width: "50vw" }}
              className="flex flex-wrap  justify-around items center w-2/3"
            >
              Snippet Section
            </div>
          </div>
        ) : (
          <div className="flex">
            <div className="flex flex-wrap  justify-around items center">
              {cardData.map((card, index) => (
                <button onClick={() => setIsOpenSnippet(true)}>
                  <SnippetCard key={index} {...card} />
                </button>
              ))}
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}
