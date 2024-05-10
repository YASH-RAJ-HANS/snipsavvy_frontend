import React, { useLayoutEffect } from "react";
import { useState } from "react";
import SnippetCard from "./SnippetCard/Card";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import Welcome from "./Welcome";

interface SnippetSectionProps {}

const SnippetSection: React.FC<SnippetSectionProps> = () => {
  const [openSnippet, setIsOpenSnippet] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const Router = useRouter();

  const collection = searchParams.get("collection") || "";
  const snippet = searchParams.get("snippet") || "";

  const updateUrl = (name: string) => {
    const workspace = searchParams.get("workspace") || "";
    const collection = searchParams.get("collection") || "";
    const query: Record<string, string> = {
      workspace,
      collection,
    };
    if (name) {
      query.snippet = name;
    }
    Router.push(`?${new URLSearchParams(query).toString()}`);
    setIsOpenSnippet(true);
  };

  const [isSnippet, setIsSnippet] = useState<any>([]);

  useLayoutEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await axios.get(
          `https://snipsavvy.onrender.com/v1/api/snippet?cat_id=${collection}`
        );
        setIsSnippet(response.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (collection) {
      fetchSnippets();
    }
  }, [collection]);

  return (
    <div>
      {collection ? (
        <div
          style={{ height: "100vh" }}
          className="h-screen-full w-full overflow-y-auto"
        >
          <div className={`${snippet ? "w-1/3 " : "vw-75"} flex flex-col `}>
            <div className="w-full flex mt-2">
              <div className="w-full flex flex-wrap overflow-hidden">
                <div className="flex flex-wrap justify-around pb-20">
                  {isSnippet.map((snip: any) => (
                    <button onClick={() => updateUrl(snip._id)} key={snip._id}>
                      <SnippetCard {...snip} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : collection == "" ? (
        <div>
          <Welcome />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SnippetSection;
