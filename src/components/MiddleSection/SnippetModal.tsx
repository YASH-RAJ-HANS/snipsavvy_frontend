"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@mui/material/Button";
import axios from "axios";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const SnippetModal = () => {
  const searchParams = useSearchParams();
  const collection = searchParams.get("collection")
    ? searchParams.get("collection")
    : "";
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [data, setData] = React.useState({
    title: "",
    description: "",
    code: "",
    tags: [],
    category_id: "",
  });
  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagInput) {
      e.preventDefault();
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };
  const handleCreateSnippet = async () => {
    const body = {
      title: data.title,
      description: data.description,
      code: data.code,
      tags: tags,
      category_id: `${collection}`,
    };

    {
      collection &&
        (await axios
          .post("https://snipsavvy.onrender.com/v1/api/snippet", body)
          .then(
            (response) => {
              console.log(response);
            },
            (error) => {
              console.log(error);
            }
          ));
    }
  };
  return (
    <div className="w-5/6 ">
      <Sheet>
        <SheetTrigger>
          <div className="text-xl rounded-md bg-blue-800 px-3 h-10 items-center flex justify-center">
            Add Snippet
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Make your new snippet with SnipSavvy</SheetTitle>
            <SheetDescription>
              <div className="fixed top-16 right-5 h-full w-1/5 bg-black transition-all duration-900 z-50">
                <div className="p-4 space-y-4">
                  <div>
                    <label className="block text-md font-medium text-gray-200">
                      Title
                    </label>
                    <input
                      type="text"
                      placeholder="Title"
                      onChange={(e) =>
                        setData({ ...data, title: e.target.value })
                      }
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-md font-medium text-gray-200">
                      Description
                    </label>
                    <input
                      type="text"
                      placeholder="Description"
                      onChange={(e) =>
                        setData({ ...data, description: e.target.value })
                      }
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-md font-medium text-gray-200">
                      Code
                    </label>
                    <textarea
                      placeholder="Code..."
                      onChange={(e) =>
                        setData({ ...data, code: e.target.value })
                      }
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-md font-medium text-gray-200">
                      Tags
                    </label>
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleAddTag}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                    />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    style={{ height: "3rem" }}
                    onClick={() => handleCreateSnippet()}
                    variant="contained"
                  >
                    Create
                  </Button>
                </div>
              </div>
              
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SnippetModal;
