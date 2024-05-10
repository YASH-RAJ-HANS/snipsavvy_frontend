import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Access() {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Workspace Access</h2>

        <div>
          <div className="border border-gray-500 ">
            <p className="text-lg font-semibold">Web Dev</p>
            <p className="text-md">this is a web dev workspace</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
