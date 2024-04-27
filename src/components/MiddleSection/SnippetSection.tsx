"use client";
import React from "react";
import { useState,useEffect } from "react";
import SnippetCard from "./SnippetCard/Card";
import Link from "next/link";
// import Collection from "../workspace/Collection";
import { useSearchParams, useRouter } from "next/navigation";
// import { Suspense } from "react";
import axios from "axios";

interface SnippetSectionProps {
  // setIsOpen: any;
}

const SnippetSection: React.FC<SnippetSectionProps> = () => {
  const [openSnippet, setIsOpenSnippet] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const Router = useRouter();
  const collection = searchParams.get("collection")
    ? searchParams.get("collection")
    : "";
  const snippet = searchParams.get("snippet")
    ? searchParams.get("snippet")
    : "";
 
  const updateUrl = (name: string) => {
    const workspace = searchParams.get("workspace");
    const collection = searchParams.get("collection");
    const query: Record<string, string> = {
      workspace: workspace || "",
      collection: collection || "",
    };
    if (name) {
      query.snippet = name;
    }
    Router.push(`?${new URLSearchParams(query).toString()}`);
    setIsOpenSnippet(true);
  };

  const handleSnippet = () => {
    // setIsOpen(true)

    setIsOpenSnippet(true);
  };
 
  
  const [isSnippet, setIsSnippet] = useState<any>([]); //[FIX ME ] 
  
  useEffect(()=> {
    const fetchSnippets = async () => {
      axios.get('https://snipsavvy.onrender.com/v1/api/snippet?cat_id=' + `${collection}`)
      .then(response => {
        setIsSnippet(response.data.data)
        console.log(response.data.data)
      }).catch(error => {
        console.log(error)
      })
    }
    collection && fetchSnippets()
}, [collection])
interface Snip{
  _id: string;
  title: string;
  description :string;
}
  return (
    
    <div>
      {collection && (
        <div style={{ minHeight: "100vh" }} className="h-screen-full mt-16">
          <div
            className={`${snippet ? "w-1/3 " : "w-full"} flex flex-col justify-around items-center `}
          >
            <div className="text-xl pl-4 mb-4">
              Get Started with {collection} Snippets
            </div>
            <hr />
            
              <div className="flex mt-2">
                <div className="flex flex-wrap   overflow-hidden ">
                  <div
                    className={`${snippet ? "items-center justify-center h-5/6  " : " justify-center  h-fullitems-center"} overflow-y-scroll flex flex-wrap   h-full scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-200 scrollbar-thumb-rounded`}
                  >
                    {isSnippet.map((snip:Snip) => (
                      <button
                        onClick={() => updateUrl(snip._id)}
                        key={snip._id}
                      >
                        <SnippetCard {...snip} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      )}
    </div>
    
  );
};
export default SnippetSection;
