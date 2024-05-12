"use client";
import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SnippetModal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Image from "next/image";
import Workspace from "../../../public/workspace.jpg";
import axios from 'axios';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { baseURL } from "@/config";

// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 800,
//   // border: "2px solid gray",
//   borderRadius:"1.5rem",
//   boxShadow: 24,
//   text: "white",
//   display:"flex",
//   // p: 4,
// };

export default function Modal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = React.useState({
    name:"",
    description:""
  })
  const handleSubmit = () => {
    setOpen(false);
    alert("Works space created!");
  };
  const handleCreateWorkspace = async () => {
    const body = {
      name: data.name,
      description: data.description,
    }
    const token = localStorage.getItem("token")
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    
    await axios.post(`${baseURL}/v1/api/workspace` ,body, { headers })
      .then((response) => {
          console.log(response);
          
        }, (error) => {
          console.log(error);
          
        });
  }
  

  return (
    
      <Dialog >
      <DialogTrigger asChild>
        <Button  className="hover:bg-zinc-600 hover:rounded duration-300 font-bold text-3xl ">+</Button>
      </DialogTrigger>
      <DialogContent className="text-white sm:max-w-[425px] rounded-3xl">
        <DialogHeader>
          <DialogTitle>Create Workspace</DialogTitle>
          <DialogDescription >
            Add Name & Description to your workspace
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right" >
              Name
            </Label>
            <Input id="name" placeholder="New Workspace" className="col-span-3 text-white" onChange={(e)=> setData({...data, name:e.target.value})}/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input id="username" placeholder="Project Snippets" className="col-span-3" onChange={(e) => setData({...data, description:e.target.value})}/>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => handleCreateWorkspace()}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    

    // <div className="  text-white font-bold text-4xl ">
    //   <Button
    //     onClick={handleOpen}
    //     className="text-5xl ml-4 border-2 rounded-full border-white hover:bg-gray-800 hover:text-blue-800"
    //   >
    //     +{" "}
    //   </Button>
    //   <div style={{border:"2px solid gray"}} className="flex">
    //     <SnippetModal
    //       open={open}
    //       onClose={() => handleClose()}
    //       aria-labelledby="modal-modal-title"
    //       aria-describedby="modal-modal-description"
    //     >
    //       <Box sx={style}>
    //         <div className="flex flex-col justify-around items-center pt-10 pb-10 bg-gray-900 rounded-md w-3/6">
    //           <Typography id="modal-modal-title" variant="h3" component="h3">
    //             Welcome! Yash
    //           </Typography>
    //           <Typography
    //             id="modal-modal-description"
    //             variant="h5"
    //             sx={{ mt: 3, mb: 3, pl: 5 }}
    //           >
    //             What You want to call your workspace?
    //           </Typography>
    //           <div className="flex justify-around w-full mb-4">
    //             <input
    //               type="text"
    //               className="bg-black text-white border border-white rounded-md px-4 py-2 focus:outline-none focus:border-gray-400"
    //               placeholder="Name workspace"
    //               onChange={(e)=> setData({...data, name:e.target.value})}
    //             ></input>

    //             <Button
    //               style={{ height: "3rem" }}
    //               onClick={() => handleCreateWorkspace()}
    //               variant="contained"
    //             >
    //               Create
    //             </Button>
    //           </div>
    //           <textarea
    //             className="bg-black text-white border border-white rounded-md px-4 py-2 focus:outline-none focus:border-gray-400 resize-none h-20 w-11/12"
    //             placeholder="Describe your workspace"
    //             onChange={(e) => setData({...data, description:e.target.value})}
    //           ></textarea>
    //         </div>
    //         <div className="flex items-center bg-gray-900">
    //           <Image
    //             src={Workspace}
    //             alt="Picture of the author"
    //             width={400}
    //             height={400}
    //           />
    //         </div>
            
    //       </Box>
    //     </SnippetModal>
    //   </div>
    // </div>
  );
}
