"use client";
import React from "react";
import { useState } from "react";
import SnippetCard from "../Utils/Snippet_Card/Card";
import Link from 'next/link';
// import Collection from "../workspace/Collection";
import { useSearchParams, useRouter } from "next/navigation";

interface SnippetSectionProps {
  
  // setIsOpen: any;
 
}

const SnippetSection: React.FC<SnippetSectionProps> = () =>{
  const [openSnippet, setIsOpenSnippet] = useState<boolean>(false);
  const searchParams = useSearchParams();

const Router = useRouter();
  const collection = searchParams.get("collection")
    ? searchParams.get("collection")
    :""
  const snippet = searchParams.get("snippet")
    ? searchParams.get("snippet")
    :""

  const updateUrl = (name: string) => {
    const workspace = searchParams.get("workspace");
    const collection = searchParams.get("collection");
    const query : Record<string, string> = {
      workspace: workspace || "",
      collection: collection || "",
    };
    if(name){
      query.snippet = name
    }
    Router.push(`?${new URLSearchParams(query).toString()}`);
    setIsOpenSnippet(true)
  }  
  
  const handleSnippet = () => {
    // setIsOpen(true)
    
    setIsOpenSnippet(true)
  }
  const cardData = [
    { title: "LeetCode", content: "Coding platform with alg", snippetId: '1' },
    { title: "Snippet", content: "Reusable code snippet rep", snippetId: '2' },
    { title: "LeetCode", content: "Improve coding skills by s", snippetId: '3' },
    { title: "Snippet", content: "Store and share useful co", snippetId: '4' },
  ];
  
    return (
      collection && 
        (<div style={{ minHeight: "100vh" }} className="h-screen-full">
        <div style={{ maxWidth: "75vw" }} className="flex flex-col ">
          <div className="text-xl pl-4 mb-4">Get Started with {collection} Snippets
          </div>

          <div className="flex">
            <div className={`${snippet ? "w-1/3 " : "w-full"} flex flex-wrap  justify-around items center`}>
              {cardData.map((card, index) => (
                <button onClick={() => updateUrl(card.snippetId)} key={index}>
                  <SnippetCard  {...card} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
        

        // (
        //   <div>
        //     <p >Click to view snippets</p>
        //   </div>
        // )

          
  );
  
  
};
export default SnippetSection;
