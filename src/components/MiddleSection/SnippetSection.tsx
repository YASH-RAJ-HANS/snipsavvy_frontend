"use client";
import React from "react";
import { useState } from "react";
import SnippetCard from "./SnippetCard/Card";
import Link from "next/link";
// import Collection from "../workspace/Collection";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

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
  const cardData = [
    {
      title: "LeetCode",
      content:
        "Coding platform with alg Coding platform with algCoding platform with alg",
      snippetId: "1",
    },
    {
      title: "Snippet",
      content:
        "Reusable code snippet rep Coding platform with alg Coding platform with algCoding platform with alg",
      snippetId: "2",
    },
    {
      title: "LeetCode",
      content:
        "Improve coding skills by s Coding platform with alg Coding platform with algCoding platform with alg",
      snippetId: "3",
    },
    {
      title: "Snippet",
      content:
        "Store and share useful co Coding platform with alg Coding platform with algCoding platform with alg",
      snippetId: "4",
    },
    {
      title: "Snippet",
      content:
        "Store and share useful co Coding platform with alg Coding platform with algCoding platform with alg",
      snippetId: "4",
    },
    {
      title: "Snippet",
      content:
        "Store and share useful co Coding platform with alg Coding platform with algCoding platform with alg",
      snippetId: "4",
    },
    {
      title: "Snippet",
      content:
        "Store and share useful co Coding platform with alg Coding platform with algCoding platform with alg",
      snippetId: "4",
    },
  ];

  return (
    <Suspense>
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
            <Suspense>
              <div className="flex mt-2">
                <div className="flex flex-wrap   overflow-hidden ">
                  <div
                    className={`${snippet ? "items-center justify-center h-5/6  " : " justify-center  h-fullitems-center"} overflow-y-scroll flex flex-wrap   h-full scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-200 scrollbar-thumb-rounded`}
                  >
                    {cardData.map((card, index) => (
                      <button
                        onClick={() => updateUrl(card.snippetId)}
                        key={index}
                      >
                        <SnippetCard {...card} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Suspense>
          </div>
        </div>
      )}
    </div>
    </Suspense>
  );
};
export default SnippetSection;
