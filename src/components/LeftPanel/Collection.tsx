import React, { useState, useEffect } from "react";
import { FaFolderOpen } from "react-icons/fa";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { BsDot } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";

const Collection = () => {
  const [showInput, setShowInput] = useState(false);
  const [collection, setCollection] = useState<any>([]);
  const [data, setData] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();
  const workspace = searchParams.get("workspace") || "";
  const collectionid = searchParams.get("collection") || "";
  const [isLoading, setIsLoading] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);

  const fetchCategories = () => {
    axios
      .get(`https://snipsavvy.onrender.com/vi/api/category/${workspace}`)
      .then((response) => {
        setCollection(response.data);
        console.log("collections=>", response.data.data);
        setIsDataLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setIsDataLoading(true);
    workspace && fetchCategories();
  }, [workspace]);

  const handleAddClick = () => {
    setShowInput(!showInput);
  };

  const handleCreateCollection = async () => {
    setIsLoading(true);
    const body = {
      id: workspace,
      name: data,
      description: "SnipSavvy Project Snippets",
    };
    await axios
      .post("https://snipsavvy.onrender.com/vi/api/category", body)
      .then((response) => {
        console.log(response);
        // [FIX ME] at a toast here, instead of alert
        fetchCategories();
        setShowInput(false);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCreateCollection();
    }
  };

  const updateUrl = (name: string) => {
    const query: Record<string, string> = { workspace };
    if (name) query.collection = name;
    router.push(`?${new URLSearchParams(query).toString()}`);
  };

  const colorOptions = [
    "#5AC341",
    "#ACA035",
    "#A33B3A",
    "#3C50A6",
    "#A73C5F",
    "#3CA686",
  ];

  interface collectionItem {
    name: string;
    description: string;
    _id: string;
  }

  return (
    <div className="w-[20vw] border-l-2 border-slate-700 bg-[#1E1F21] overflow-none">
      <div>
        <div className="flex m-8 items-center justify- ">
          <div className="mr-3 text-gray-400  ">
            <FaFolderOpen size={20} />
          </div>
          <div className="flex justify-between w-full">
            <p className="text-md text-gray-400 font-bold">COLLECTIONS</p>
            <button
              className="font-extrabold rounded-full text-2xl -mt-1.5  text-gray-400 hover:text-white"
              onClick={handleAddClick}
            >
              {showInput ? <FiMinus /> : "+"}
            </button>
          </div>
          <hr />
        </div>
        {showInput && (
          <div className="flex items-center ">
            <Input
              value={data}
              type="text"
              className="mb-8 ml-4 w-64 h-10 rounded p-1 pl-4 text-white"
              placeholder="Collection name .."
              onChange={(e) => setData(e.target.value)}
              onKeyDown={handleKeyPress}
            />

            {!isLoading ? (
              <Button
                variant="outline"
                className="mb-8 w-16 ml-2 mr-2 rounded h-8 bg-gray-600"
                onClick={handleCreateCollection}
              >
                Save
              </Button>
            ) : (
              <CircularProgress
                color="success"
                className="mb-10 ml-2"
                size={25}
              />
            )}
          </div>
        )}
        <div className="-mt-4">
          {workspace ? (
            !isDataLoading ? (
              collection?.map((item: collectionItem, index: number) => (
                <div
                  key={item._id}
                  style={{
                    backgroundColor:
                      collectionid === item?._id ? "rgb(24 24 27)" : "",
                    color: collectionid === item?._id ? "white" : "",
                  }}
                  onClick={() => updateUrl(item._id)}
                  className="hover:bg-zinc-900 h-10 w-64 rounded-xl m-auto ml-4 pt-1 text-lg mt-1 text-slate-300 hover:text-white cursor-pointer flex"
                >
                  <span className="-mt-2.5">
                    <BsDot size={50} color={colorOptions[index % 6]} />
                  </span>
                  {item?.name}
                </div>
              ))
            ) : (
              <div className="w-60 ml-8 mt-10 flex flex-col gap-4">
                <Skeleton
                  sx={{ bgcolor: "grey.700", borderRadius: "10px" }}
                  height={30}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{ bgcolor: "grey.700", borderRadius: "10px" }}
                  height={30}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{ bgcolor: "grey.700", borderRadius: "10px" }}
                  height={30}
                  variant="rectangular"
                />
                <Skeleton
                  sx={{ bgcolor: "grey.700", borderRadius: "10px" }}
                  height={30}
                  variant="rectangular"
                />
              </div>
            )
          ) : (
            <h1 className="font-bold text-2xl opacity-50 text-center mt-20">
              Select a workspace to get started
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
