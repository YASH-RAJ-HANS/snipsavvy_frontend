"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SnippetModal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
 
  width: 400,
  bgcolor: "black",
  border: "2px solid gray",
  boxShadow: 24,
  text: "white",
  // p: 4,
};

export default function Modal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit =() => {
   
    setOpen(false);
    
    alert('Works space created!');
  }

  return (
    <div className="   ">
      <Button onClick={handleOpen} className='text-white font-bold text-3xl'>+ </Button>
      <SnippetModal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col justify-around items-center pt-10 ">
            <Typography id="modal-modal-title" variant="h3" component="h3">
              Welcome! Yash
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="h5"
              sx={{ mt: 3, mb: 3 ,pl
                :5}}
            >
              What You want to call your workspace?
            </Typography>
            <div className="flex justify-around w-full mb-4">
              <input
                type="text"
                className="bg-black text-white border border-white rounded-md px-4 py-2 focus:outline-none focus:border-gray-400"
                placeholder="Name workspace"
              ></input>

              <Button
                style={{ height: "3rem" }}
                onClick={() => handleSubmit()}
                
                variant="contained"
                
              >
                Create
              </Button>
            </div>
            <textarea
              className="bg-black text-white border border-white rounded-md px-4 py-2 focus:outline-none focus:border-gray-400 resize-none h-20 w-11/12"
              placeholder="Describe your workspace"
            ></textarea>
          </div>
          <div className="">
          <svg
            id="wave"
            style={{
              transform: "rotate(0deg)",
              transition: "0.3s",
              
            }}
            viewBox="0 0 1440 440"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop
                  stopColor="rgba(0, 88.577, 246.263, 1)"
                  offset="0%"
                ></stop>
                <stop stopColor="rgba(37.869, 0, 255, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 0px); opacity:1" }}
              fill="url(#sw-gradient-0)"
              d="M0,132L14.1,154C28.2,176,56,220,85,220C112.9,220,141,176,169,161.3C197.6,147,226,161,254,168.7C282.4,176,311,176,339,190.7C367.1,205,395,235,424,234.7C451.8,235,480,205,508,198C536.5,191,565,205,593,205.3C621.2,205,649,191,678,212.7C705.9,235,734,293,762,293.3C790.6,293,819,235,847,198C875.3,161,904,147,932,176C960,205,988,279,1016,300.7C1044.7,323,1073,293,1101,234.7C1129.4,176,1158,88,1186,88C1214.1,88,1242,176,1271,176C1298.8,176,1327,88,1355,73.3C1383.5,59,1412,117,1440,146.7C1468.2,176,1496,176,1525,190.7C1552.9,205,1581,235,1609,271.3C1637.6,308,1666,352,1694,337.3C1722.4,323,1751,249,1779,220C1807.1,191,1835,205,1864,227.3C1891.8,249,1920,279,1948,264C1976.5,249,2005,191,2019,161.3L2032.9,132L2032.9,440L2018.8,440C2004.7,440,1976,440,1948,440C1920,440,1892,440,1864,440C1835.3,440,1807,440,1779,440C1750.6,440,1722,440,1694,440C1665.9,440,1638,440,1609,440C1581.2,440,1553,440,1525,440C1496.5,440,1468,440,1440,440C1411.8,440,1384,440,1355,440C1327.1,440,1299,440,1271,440C1242.4,440,1214,440,1186,440C1157.6,440,1129,440,1101,440C1072.9,440,1045,440,1016,440C988.2,440,960,440,932,440C903.5,440,875,440,847,440C818.8,440,791,440,762,440C734.1,440,706,440,678,440C649.4,440,621,440,593,440C564.7,440,536,440,508,440C480,440,452,440,424,440C395.3,440,367,440,339,440C310.6,440,282,440,254,440C225.9,440,198,440,169,440C141.2,440,113,440,85,440C56.5,440,28,440,14,440L0,440Z"
            ></path>
          </svg>
          </div>
        </Box>
      </SnippetModal>
    </div>
  );
}
