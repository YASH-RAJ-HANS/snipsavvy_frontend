"use client";
import Drawer from "@/components/RightDrawer/Drawer";
import SnippetSection from "@/components/MiddleSection/SnippetSection";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { Suspense, useState } from "react";
import SnippetModal from "@/components/MiddleSection/SnippetModal";
import Welcome from "@/components/MiddleSection/Welcome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosAdd } from "react-icons/io";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import SearchParamsHandler from "./SearchParamHandler";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const style = {
  position: "absolute" as "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const WorkspacePage: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [isEditable, setIsEditable] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const session = useSession();

  const handleAdd = () => {
    setOpenDrawer(true);
  };

  const router = useRouter();
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        handleOpen();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsHandler />
        {/* Your component JSX here */}
        <div
          style={{ width: "75vw" }}
          className="fixed top-0 right-0 h-screen text-white bg-zinc-900"
        >
          <div
            style={{ width: "75vw" }}
            className="fixed top-0   pr-3 flex flex-col justify-between items-start bg-zinc-900  py-4"
          >
            <div className="flex w-full justify-end">
              <div className="flex w-full border-b-1 border-gray-700 shadow-md">
                <div className=" ml-6 px-2 h-10 flex items-center rounded-l">
                  <SearchIcon />
                </div>
                {open && (
                  <div>
                    <Modal
                      className="backdrop-blur-sm"
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box
                        sx={{
                          ...style,
                          height: 500,
                        }}
                        className="bg-zinc-950  rounded-xl"
                      >
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Search Snippet
                        </Typography>
                        <Typography
                          id="modal-modal-description"
                          sx={{ mt: 2, display: "flex" }}
                        >
                          <div className="border-2 ml-6 px-2 border-gray-400 h-10 flex items-center rounded-l">
                            <SearchIcon />
                          </div>
                          <SearchParamsHandler />
                        </Typography>
                      </Box>
                    </Modal>
                  </div>
                )}
                <input
                  type="text"
                  className="w-full h-10 vh-5 bg-zinc-900 px-4 hover:shadow-outline focus:outline-none rounded-r text-lg text-gray-600 placeholder-gray-500 font-mono"
                  placeholder="Find by Tag, Description , title..."
                  onClick={handleOpen}
                />
                <div
                  onClick={handleOpen}
                  className="px-4 py-2 rounded-xl mb-2 flex   items-center text-xs text-gray-600 border-2 border-gray-600 shadow-lg   w-fit"
                >
                  <span>CTRL+K</span>
                </div>
                <div className="w-2/12 vh-6 flex justify-between pl-6 items-center">
                  <button
                    className="bg-blue-600 hover:bg-blue-400 duration-300 rounded-xl text-xl px-3 py-2 mb-2 text-white"
                    onClick={handleAdd}
                  >
                    <IoIosAdd />
                  </button>
                  <Drawer
                    className="fixed top-16 right-0"
                    isOpen={openDrawer}
                    setIsOpen={setOpenDrawer}
                    isEditable={true}
                    setIsEditable={setIsEditable}
                    shared="false"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 overflow-hidden p-4">
              <SnippetSection />

              <Drawer
                className="fixed top-16 right-0"
                isOpen={openDrawer}
                setIsOpen={setOpenDrawer}
                isEditable={isEditable}
                setIsEditable={setIsEditable}
                shared="false"
              />
            </div>
          </div>
        </div>
      </Suspense>
    </Suspense>
  );
};

export default WorkspacePage;
