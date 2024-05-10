"use client";
import React, { useEffect, useState, useRef } from "react";
import { CiSettings, CiLogout } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";

import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Modal from "./Modal";
import Collection from "./Collection";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import { MdEdit, MdDelete } from "react-icons/md";

import { baseURL } from "@/config";
import SettingsModal from "../Settings/SettingsModal";
import DeleteModal from "./DeleteModal"
import useFetch from "@/network/useFetch";

const Sidebar = () => {
  const [workspace, setWorkspace] = useState<any>([]);
  const [selectedWorkspace, setSelectedWorkspace] = useState<string | null>(
    null
  );
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeWorkspaceIndex, setActiveWorkspaceIndex] = useState<
    number | null
  >(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [singleWorkSpace, setSingleWorkspace] = useState<Workspace>();
  const router = useRouter();

  useEffect(() => {
    setIsDataLoading(true);
    axios
      .get(`${baseURL}/v1/api/workspace?user_id=${"65f72cd38cfe34c5f0c2648b"}`)
      .then((response) => {
        setWorkspace(response.data);
        setIsDataLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsDataLoading(false);
      });
  }, []);

  const updateUrl = (name: string) => {
    setSelectedWorkspace(name);
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

  useEffect(() => {
    // Add event listener for clicks on the document
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Cleanup: Remove event listener when component unmounts
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      !isDropdownButton(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const isDropdownButton = (target: Node) => {
    return (
      target instanceof Node &&
      dropdownRef.current &&
      dropdownRef.current.contains(target)
    );
  };

  const handleRightClick = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
    workspace: Workspace
  ) => {
    e.preventDefault();
    setDropdownPosition({ x: e.clientX, y: e.clientY });
    setActiveWorkspaceIndex(index);
    setIsDropdownOpen(true);
    setSingleWorkspace(workspace);
  };
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    console.log("Option clicked:", option);
    setIsDropdownOpen(false);

    switch (option) {
      case "edit":
        console.log("Edit clicked");
        break;
        case "delete":
          console.log("Delete clicked");
          setDeleteModalOpen(true);
          break;
        
      case "share":
        console.log("Share clicked");
        
        break;
      default:
        break;
    }
  };
  const handleDelete = () => {
    // Perform the delete operation here
    console.log("Deleting...");
    setDeleteModalOpen(false); // Close the delete modal after deletion
  };
  

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className=" w-[5vw] flex flex-col items-center bg-[#141415] rounded">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="logo"
          className="mt-6 pb-4 opacity-80"
        />
        <div className="flex-col flex-wrap justify-center">
          {!isDataLoading ? (
            workspace?.map((workspace: Workspace, i: number) => {
              return (
                <div
                  onClick={() => updateUrl(workspace._id)}
                  onContextMenu={(e) => handleRightClick(e, i, workspace)}
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
              );
            })
          ) : (
            <div className="flex flex-col gap-4 mt-6">
              <Skeleton
                sx={{ bgcolor: "grey.700", borderRadius: "10px" }}
                variant="rectangular"
                width={55}
                height={55}
              />

              <Skeleton
                sx={{ bgcolor: "grey.700", borderRadius: "10px" }}
                variant="rectangular"
                width={55}
                height={55}
              />

              <Skeleton
                sx={{ bgcolor: "grey.700", borderRadius: "10px" }}
                variant="rectangular"
                width={55}
                height={55}
              />

              <Skeleton
                sx={{ bgcolor: "grey.700", borderRadius: "10px" }}
                variant="rectangular"
                width={55}
                height={55}
              />
            </div>
          )}
        </div>
        <div className="">
          <Modal />
        </div>
        <div className="fixed bottom-0 left-2 w-full p-4 text-center">
          <ul className="flex-col">
            <li className="mb-4">
              <CiSettings
                onClick={() => setIsSettingsModalOpen(true)}
                className="text-white text-3xl cursor-pointer"
              />
            </li>
            <li>
              <CiLogout className="text-white text-3xl cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
      <Collection />
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          style={{
            position: "fixed",
            padding: "10px",
            top: dropdownPosition.y,
            left: dropdownPosition.x,
            backgroundColor: "#131211c4",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(3px)",
            zIndex: 9999,
          }}
          onBlur={() => closeDropdown()}
        >
          <ul className="w-20">
          <li
              className="cursor-pointer flex justify-between hover:bg-slate-300 hover:text-black p-1 rounded"
              onClick={() => handleOptionClick("share")}
            >
              Share <FaShareAlt  className="mt-1"/>

            </li>
            <li
              className="cursor-pointer flex justify-between hover:bg-slate-300 hover:text-black p-1 rounded"
              onClick={() => handleOptionClick("edit")}
            >
              Edit <MdEdit className="mt-1" />
            </li>
            <li
              className="cursor-pointer flex justify-between hover:bg-slate-300 hover:text-black p-1 rounded"
              onClick={() => handleOptionClick("delete")}
            >
              Delete <MdDelete className="mt-1" />
            </li>
            
          </ul>
        </div>
      )}
      <SettingsModal
        open={isSettingsModalOpen}
        setOpen={setIsSettingsModalOpen}
      />
      <DeleteModal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)} onDelete={() => handleDelete()} />

    </>
  );
};

export default Sidebar;
