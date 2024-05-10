"use client";
import Drawer from "@/components/RightDrawer/Drawer";
import SnippetSection from "@/components/MiddleSection/SnippetSection";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import SnippetModal from "@/components/MiddleSection/SnippetModal";
import { useEffect } from "react";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import { useSearchParams, useRouter } from "next/navigation";
import { baseURL } from "@/config";
import { DataFetch } from "@/network/useFetch";

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
  const [openSnippet, setOpenSnippet] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const [inpText, setInpText] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const globalSearch = async () => {
      await DataFetch({
        url: `${baseURL}/v1/api/snippet/global?text=${inpText}`,
        setState: setSearchData,
      });
    };
    inpText ? globalSearch() : setSearchData([]);
  }, [inpText]);

  const searchParams = useSearchParams();

  const Router = useRouter();

  const updateURL = (snippet: any) => {
    const currentUrl = new URL(window.location.href);
    const searchParams = new URLSearchParams(currentUrl.search);

    searchParams.set("workspace", snippet.workspace_id);
    searchParams.set("collection", snippet.category_id);
    searchParams.set("snippet", snippet._id);

    const newUrl = `${currentUrl.origin}${currentUrl.pathname}?${searchParams.toString()}`;

    // Update the URL in the browser
    window.history.replaceState({}, "", newUrl);
    handleClose();
  };

  return (
    <div
      style={{ width: "75vw" }}
      className="fixed top-0 right-0 h-screen text-white bg-zinc-900"
    >
      <div
        style={{ width: "75vw" }}
        className="fixed top-0 pr-3 flex flex-col justify-between bg-zinc-900 py-4"
      >
        <div className="flex w-full justify-end border-b-3 pb-3 border-zinc-700 shadow-lg font-mono">
          <div className="flex " style={{ width: "100vw" }}>
            <div className="ml-6 px-1 h-6 w-6 mt-2 flex items-center rounded-l text-gray-700">
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
                      {/* <hr className="my-4"/> */}
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2, display: "flex" }}
                    >
                      <div className="border-2 ml-6 px-2 border-gray-400 h-10 flex items-center rounded-l">
                        <SearchIcon />
                      </div>
                      <input
                        value={inpText}
                        onChange={(e) => setInpText(e.target.value)}
                        type="text"
                        className="w-full h-10 vh-5 bg-gray-800 text-white px-4 border-2 border-gray-400 hover:shadow-outline focus:outline-none border-l-0 rounded-r mb-4"
                        placeholder="Enter text..."
                      />
                    </Typography>

                    {/* <div className="fixed bottom-2 right-4">SnipSavvy</div> */}
                    {inpText && (
                      <div className="w-[95%] m-auto mt-4 max-h-[40vh] overflow-auto">
                        {searchData &&
                          searchData.map((snippet: any) => (
                            <div
                              onClick={() => updateURL(snippet)}
                              className="shadow-2xl mr-2 flex flex-col gap-2 rounded-xl mb-6 cursor-pointer border-2 border-zinc-950 hover:border-2 hover:border-slate-500 p-2"
                            >
                              <p className="flex">
                                {" "}
                                <IoIosArrowForward className="mt-1 mr-1" />
                                workspace{" "}
                                <IoIosArrowForward className="mt-1 mr-1" />
                                collection{" "}
                                <IoIosArrowForward className="mt-1 mr-1" />
                                {snippet.title}{" "}
                              </p>
                              <div className="flex">
                                <div>
                                  <p className="text-2xl font-semibold">
                                    {" "}
                                    {snippet.title}{" "}
                                  </p>
                                  <p> {snippet.description} </p>
                                </div>
                              </div>
                              <div className="flex">
                                {snippet.tags.map((tag: any) => (
                                  <p className="bg-black mr-2 p-1 pl-2 pr-2 rounded-xl">
                                    {" "}
                                    {tag}{" "}
                                  </p>
                                ))}
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                  </Box>
                </Modal>
              </div>
            )}
            <input
              type="text"
              className="w-full h-10 vh-5 bg-zinc-900 px-4 hover:shadow-outline focus:outline-none rounded-r text-gray-600 placeholder-gray-700"
              placeholder="Find by Code, Tag, title..."
              onClick={handleOpen}
            />
            <div className="px-4 py-1 rounded-xl flex   items-center text-xs text-gray-600 border-2 border-gray-600 shadow-lg   w-fit">
              <span>CTRL+K</span>
            </div>
          </div>
          <div className="w-2/12 vh-6 flex justify-between pl-6 items-center">
            <NotificationsIcon className="text-gray-600 mr-3" />
            {/* <button className="fixed right-0" onClick={() => setOpenSnippet(!openSnippet)}> */}

            {/* <SplitButton /> */}
            <SnippetModal />

            {/* </button> */}
            {/* {openSnippet && <SnippetModal />} */}
          </div>
        </div>
        <div className="mt-4 overflow-hidden p-4">
          <SnippetSection />
          <Drawer />
        </div>
      </div>
    </div>
  );
};

export default WorkspacePage;
