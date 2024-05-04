"use client";
import SplitButton from "@/components/Utils/button/Button";
import Drawer from "@/components/RightDrawer/Drawer";
import SnippetSection from "@/components/MiddleSection/SnippetSection";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React from "react";
import SnippetModal from "@/components/MiddleSection/SnippetModal";
import Welcome from "@/components/MiddleSection/Welcome";

const style = {
  position: "absolute" as "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,

  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const WorkspacePage: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [openSnippet, setOpenSnippet] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ width: "75vw" }} className="fixed top-0 right-0 h-screen text-white bg-zinc-900">
      <div
        style={{ width: "75vw" }}
        className="fixed top-0   pr-3 flex flex-col justify-between items-center bg-zinc-900  py-4"
      >
        <div className="flex w-full justify-end">
          <div className="flex w-1/3">
            <div className="border-2 ml-6 px-2 border-zinc-700 h-10 flex items-center rounded-l">
              <SearchIcon />
            </div>
            {open && (
              <div >
                <Modal
                 className="backdrop-blur-sm"
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style} className="bg-zinc-950 border-2 border-gray-200 rounded-xl">
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Search Snippet
                      {/* <hr className="my-4"/> */}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 ,display:"flex" }}>
                      <div className="border-2 ml-6 px-2 border-gray-400 h-10 flex items-center rounded-l">
                        <SearchIcon />
                      </div>
                      <input
                        type="text"
                        className="w-full h-10 vh-5 bg-gray-800 text-white  px-4 border-2 border-gray-400 hover:shadow-outline focus:outline-none  border-l-0 rounded-r mb-4"
                        placeholder="Enter text..."
                      />
                    </Typography>
                    
                    <div className="fixed bottom-2 right-4">SnipSavvy</div>
                  </Box>
                </Modal>
              </div>
            )}
            <input
              type="text"
              className="w-full h-10 vh-5 bg-zinc-900 text-white  px-4 border-2 border-zinc-700 hover:shadow-outline focus:outline-none  border-l-0 rounded-r"
              placeholder="Enter text..."
              onClick={handleOpen}
            />
          </div>
          <div className="w-2/12 vh-6 flex justify-between pl-6 items-center">
            <NotificationsIcon className="text-gray-600 mr-3" />
            {/* <button className="fixed right-0" onClick={() => setOpenSnippet(!openSnippet)}> */}
              
            {/* <SplitButton /> */}
            <SnippetModal/>
            
            {/* </button> */}
            {/* {openSnippet && <SnippetModal />} */}
            
          </div>
        </div>
        <div className="mt-4 overflow-hidden vw-75 p-4">
          <SnippetSection />
          <Drawer />
         
        </div>
      </div>
    </div>
  );
};

export default WorkspacePage;
