"use client";
import React from "react";
import { CiSettings } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { useRouter } from "next/navigation";
import Modal from "../snippet/modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Sidebar = () => {
  const router = useRouter();

  const updateUrl = (name: string) => {
    const query = { workspace: name };
    router.push(`?${new URLSearchParams(query).toString()}`);
  };

  const workspaces = [
    { name: "Wo", color: "#2E135D" },
    { name: "Br", color: "#164D41" },
    { name: "Sr", color: "#4A173E" },
  ];
  return (
    <>
      <div className="h- w-[6vw]  bg-[#1E1F21] pt- flex-col overflow-none">
        <div className="">
          {workspaces.map((workspace, index) => (
            <div
              onClick={() => updateUrl(workspace.name)}
              key={index}
              className="h-14 w-14  m-auto mt-7 rounded-lg cursor-pointer hover:border-2 "
              style={{ backgroundColor: `${workspace.color}` }}
            >
              <p className="text-white pt-6 pl-6 font-bold text-lg">
                {" "}
                {workspace.name}
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
