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

const Sidebar = () => {
  const [workspace, setWorkspace] = useState<any>([]); //[FIX ME ] 
  const router = useRouter();

  useEffect(()=> {
    axios.get('https://snipsavvy.onrender.com/v1/api/workspace?user_id=' + '65f72cd38cfe34c5f0c2648b')
   .then(response => {
    setWorkspace(response.data.data)
    // console.log(response.data.data)
   }).catch(error => {
    console.log(error)
   })
}, [])

  const updateUrl = (name: string) => {
    const query = { workspace: name };
    router.push(`?${new URLSearchParams(query).toString()}`);
  };

  // const workspaces = [
  //   { name: "Wo", color: "#2E135D" },
  //   { name: "Br", color: "#164D41" },
  //   { name: "Sr", color: "#4A173E" },
  // ];
  interface Workspace {
    _id: string;
    name: string;
    description :string;
  }
  const getRandomColor = () => {
    // Generate random color in hexadecimal format
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
  return (
    <>
      <div className=" w-[8vw]  bg-[#1E1F21]  flex-col overflow-none">
        <div className="">
          {workspace.map((workspace:Workspace) => (
            <div
              onClick={() => updateUrl(workspace._id)}
              key={workspace._id}
              className="h-14 w-14  m-auto mt-7 rounded-lg cursor-pointer hover:border-2 "
              style={{ backgroundColor: getRandomColor() }}

            >
              <p className="text-white pt-6 pl-6 font-bold text-lg">
                {" "}
                {workspace.name.substring(0, 2)}

              </p>
            </div>
          ))}

          <div className="  m-auto mt-7 ">
            {/* <Dialog>
              <DialogTrigger>
                <div className="text-2xl text-white">+</div>
                </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog> */}
            <Modal/>
          </div>
        </div>
        <div className="items-center justify-center pb-5">
          <ul>
          <li className="cursor-pointer"
            style={{ marginTop: "100px", marginLeft: "25px", fontSize: "30px" }}
          >
            <CiSettings />
          </li>
          <li className="cursor-pointer"
            style={{ marginTop: "20px", marginLeft: "25px", fontSize: "30px" }}
          >
            <RxAvatar />
          </li>
          </ul>
        </div>
      </div>
      {/* <div className='h-screen min-w- '>

        </div> */}
    </>
  );
};

export default Sidebar;