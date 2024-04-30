"use client";
import React, {useEffect, useState} from "react";
import { CiSettings } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { useRouter } from "next/navigation";
import axios from "axios";
import Modal from "./Modal";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Collection from "./Collection";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

const Sidebar = () => {
  const [workspace, setWorkspace] = useState<any>([]);
  const [selectedWorkspace, setSelectedWorkspace] = useState<string | null>(null);
  const [workspaceColors, setWorkspaceColors] = useState<any>(JSON.parse(localStorage.getItem("workspaceColors") || "{}") as string);
  const [isCollectionVisible, setIsCollectionVisible] = useState(false);

  const router = useRouter()
  useEffect(()=> {
    axios.get('https://snipsavvy.onrender.com/v1/api/workspace?user_id=' + '65f72cd38cfe34c5f0c2648b')
   .then(response => {
    setWorkspace(response.data.data)
   }).catch(error => {
    console.log(error)
   })
}, [])

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


  useEffect(() => {
    localStorage.setItem("workspaceColors", JSON.stringify(workspaceColors));
  }, [workspaceColors]);
  
  const assignColorToWorkspace = (workspaceId: string) => {
    // Check if color already assigned, if not, assign a new color
    if (!workspaceColors[workspaceId]) {
      const randomColor = getRandomColor();
      setWorkspaceColors((prevColors: any) => ({
        ...prevColors,
        [workspaceId]: randomColor,
      }));
    }
  };

  interface Workspace {
    _id: string;
    name: string;
    description :string;
  }
  const colorOptions = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff8000', '#8000ff', '#00ff80', '#ff0080'];

  const getRandomColor = () => {
    // Select a random color from the predefined options
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    return colorOptions[randomIndex];

  };
  
  return (
    <>
      <div className="w-[8vw] flex flex-col items-center bg-[#1F1F20] rounded">
        
      <div className="flex-col flex-wrap justify-center">
        <ContextMenu>
        {workspace.map((workspace: Workspace) => {
          assignColorToWorkspace(workspace._id);
          return (
            <ContextMenuTrigger key={workspace._id}>
            <div
              onClick={() => updateUrl(workspace._id)}
              // onContextMenu={(e) => handleContextMenu(e, workspace._id)}

              key={workspace._id}
              className="h-14 w-14 m-4 rounded-lg cursor-pointer hover:border-2 flex items-center justify-center"
              style={{
                backgroundColor: workspaceColors[workspace._id],
                borderRadius: "0.25rem",
              }}
            >
              <p className="text-white font-bold text-lg pl-6 pt-6">
                {workspace.name.substring(0, 2)}
              </p>
            </div>
            </ContextMenuTrigger>
          );
        })}
        <ContextMenuContent >
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
    {isCollectionVisible && selectedWorkspace && <Collection Workspace={selectedWorkspace} />}
    </>
  );
};

export default Sidebar;