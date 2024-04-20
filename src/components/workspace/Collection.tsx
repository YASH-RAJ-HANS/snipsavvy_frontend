"use client";
import React from "react";
import { FaFolderOpen } from "react-icons/fa";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

const Collection = () => {
  const Collections = [
    {
      name: "RandomCode1",
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      collectionId: "1",
    },
    {
      name: "RandomCode2",
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      collectionId: "2",
    },
    {
      name: "RandomCode3",
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      collectionId: "3",
    },
    {
      name: "RandomCode4",
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      collectionId: "4",
    },
    {
      name: "RandomCode5",
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      collectionId: "5",
    },
    {
      name: "RandomCode6",
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      collectionId: "6",
    },
    {
      name: "RandomCode7",
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      collectionId: "7",
    },
    {
      name: "RandomCode8",
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      collectionId: "8",
    },
    {
      name: "RandomCode9",
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      collectionId: "9",
    },
    {
      name: "RandomCode10",
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      collectionId: "10",
    },
  ];

  const searchParams = useSearchParams();
  const router = useRouter();

  const workspace = searchParams.get("workspace")
    ? searchParams.get("workspace")
    : "";
  const currentSearchParams = useSearchParams();

  const updateUrl = (name: string) => {
    const workspace = currentSearchParams.get("workspace") || "";
    const query: Record<string, string> = { workspace };
    if (name) {
      query.collection = name;
    }
    router.push(`?${new URLSearchParams(query).toString()}`);
  };

  return (
    <div className="h-screen w-25vw border-l-2 border-slate-700  bg-[#1E1F21]">
      <div>
        <div className="flex m-10 ">
          <div className="mr-3   ">
            <FaFolderOpen />
          </div>
          <p className="pr-10 text-sm text-slate-200 font-bold">
            {workspace} COLLECTIONS
          </p>
          <button className="font-extrabold -mt-1.5 text-lg">+</button>
        </div>
        <div className="-mt-5 ml-5">
          {Collections.map((collection, index) => (
            <div key={index} className="h-14 w-14  m-auto ml-7 rounded-lg ">
              {/* <Link href={`/workspace/${collection.collectionId}`}> */}
              <button
                onClick={() => updateUrl(collection.name)}
                className="text-slate-400 flex text-sm hover:border-2"
              >
                <span
                  style={{
                    color: `${collection.color}`,
                    marginRight: "10px",
                    fontWeight: "100px",
                  }}
                >
                  •
                </span>{" "}
                {collection.name}
              </button>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
