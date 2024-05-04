"use client";
import React, { useLayoutEffect } from "react";
import { useState, useEffect } from "react";
import SnippetCard from "./SnippetCard/Card";
import Link from "next/link";
// import Collection from "../workspace/Collection";
import { useSearchParams, useRouter } from "next/navigation";
// import { Suspense } from "react";
import axios from "axios";
import Welcome from "./Welcome";

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
    const workspace = searchParams.get("workspace")
    ? searchParams.get("workspace")
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

  useLayoutEffect(() => {
    const fetchSnippets = async () => {
      axios
        .get(
          "https://snipsavvy.onrender.com/v1/api/snippet?cat_id=" +
            `${collection}`
        )
        .then((response) => {
          setIsSnippet(response.data.data);
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    collection && fetchSnippets();
  }, [collection]);
  interface Snip {
    _id: string;
    title: string;
    description: string;
    code: string;
  }
  return (
    <div>
      {collection? (
        <div style={{ minHeight: "100vh" }} className="h-screen-full w-full">
          <div className={`${snippet ? "w-1/3 " : "vw-75"} flex flex-col `}>
            <div className="text-xl pl-4 mb-4">
              Get Started with Code Snippets...
            </div>
            {/* <hr className="h-2 text-gray-800 w-full mb-2" /> */}

            <div className="w-full flex mt-2">
              <div className="w-full flex flex-wrap   overflow-hidden ">
                <div
                  className="flex flex-wrap "
                  // className={`${snippet} ? "items-center justify-center h-5/6  " : " justify-center  h-fullitems-center"} overflow-y-scroll flex flex-wrap   h-full   `}
                >
                  {isSnippet.map((snip: Snip) => (
                    <button onClick={() => updateUrl(snip._id)} key={snip._id}>
                      <SnippetCard {...snip} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ): (collection==""  ?<div><Welcome/></div>: <div></div> )}
    </div>
  );
};
export default SnippetSection;
