"use client";
import React from "react";
import { CiSettings } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { useParams, useRouter } from "next/navigation";
import  Link  from "next/link"

const Sidebar = () => {
  const router = useRouter();

  const updateUrl = (name: string) => {
    // const query = { workspace: name };
    // router.push(`?${new URLSearchParams(query).toString()}`);
    localStorage.setItem('workspaceName', name);
  };
  const routes = useRouter();
  
  const workspaces = [
    { name: "Wo", color: "#2E135D" },
    { name: "Br", color: "#164D41" },
    { name: "Sr", color: "#4A173E" },
  ];
  return (
    <>
      <div className="h-screen w-[6vw]  bg-[#1E1F21] pt-6 ">
        <div className="">
          {workspaces.map((workspace, index) => (
            <div
              onClick={() => updateUrl(workspace.name)}
              key={index}
              className="h-14 w-14  m-auto mt-7 rounded-lg "
              style={{ backgroundColor: `${workspace.color}` }}
            >
              <Link href={`/dashboard/${workspace.name}`}>
              <p className="text-white pt-6 pl-6 font-bold text-lg">
                {" "}
                {workspace.name}
              </p>
              </Link>
            </div>
          ))}

          <div className="border h-10 w-10 rounded-full m-auto mt-7 ">
            <p className="pt-0.5 pl-2.5 font-bold text-2xl">+</p>
          </div>
        </div>
        <div
          style={{ marginTop: "200px", marginLeft: "25px", fontSize: "30px" }}
        >
          <CiSettings />
        </div>
        <div
          style={{ marginTop: "20px", marginLeft: "25px", fontSize: "30px" }}
        >
          <RxAvatar />
        </div>
      </div>
      {/* <div className='h-screen min-w- '>

        </div> */}
    </>
  );
};

export default Sidebar;
