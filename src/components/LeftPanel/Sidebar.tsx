"use client";
import React, { useEffect, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Modal from "./Modal";
import Collection from "./Collection";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { baseURL } from "@/config";

const Sidebar = () => {
  const [workspace, setWorkspace] = useState<any>([]);
  const [selectedWorkspace, setSelectedWorkspace] = useState<string | null>(
    null
  );
  const [isCollectionVisible, setIsCollectionVisible] = useState(false);

  const router = useRouter();
  useEffect(() => {
    axios
      .get(`${baseURL}/v1/api/workspace?user_id=${"65f72cd38cfe34c5f0c2648b"}`)
      .then((response) => {
        setWorkspace(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // Check if there's a selected workspace in local storage
    const storedWorkspace = localStorage.getItem("selectedWorkspace");
    if (storedWorkspace) {
      setSelectedWorkspace(storedWorkspace);
      setIsCollectionVisible(true); // Show the collection
    }
  }, []);
  const updateUrl = (name: string) => {
    setSelectedWorkspace(name); // Update the selected workspace
    setIsCollectionVisible(true); // Show the collection
    localStorage.setItem("selectedWorkspace", name);

    const query = { workspace: name };
    router.push(`?${new URLSearchParams(query).toString()}`);
  };

  interface Workspace {
    _id: string;
    name: string;
    description: string;
  }
  const colorOptions = [
    "#2E135D",
    "#164D41",
    "#4A173E",
    "#0E2954",
    "#3C2A21",
    "#2D4263",
  ];

  const searchParams = useSearchParams();
  const w_id = searchParams.get("workspace") || "";

  return (
    <>
      <div className=" flex flex-col items-center bg-[#1F1F20] rounded">
        <div className="flex-col flex-wrap justify-center">
          <ContextMenu>
            {workspace.map((workspace: Workspace, i: number) => {
              return (
                <ContextMenuTrigger key={workspace._id}>
                  <div
                    onClick={() => updateUrl(workspace._id)}
                    key={workspace._id}
                    className="h-14 w-14 m-4 rounded-xl cursor-pointer hover:border-4 flex items-center justify-center"
                    style={{
                      backgroundColor: colorOptions[i % 6],
                      boxShadow: "1px 1px 3px 1px #0a0a0aad",
                      border: w_id === workspace._id ? "4px solid white" : "",
                    }}
                  >
                    <p className="text-slate-300 font-bold text-xl pl-4 pt-4">
                      {workspace.name.substring(0, 2)}
                    </p>
                  </div>
                </ContextMenuTrigger>
              );
            })}
            <ContextMenuContent>
              <ContextMenuItem>Edit</ContextMenuItem>
              <ContextMenuItem>Delete</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
        <div className="">
          <Modal />
        </div>
        <div className="mt-14">
          <ul className="flex-col ">
            <li className=" mb-2">
              <CiSettings className="text-white text-3xl cursor-pointer" />
            </li>
            <li>
              <RxAvatar className="text-white text-3xl cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
      {isCollectionVisible && <Collection />}
    </>
  );
};

export default Sidebar;
