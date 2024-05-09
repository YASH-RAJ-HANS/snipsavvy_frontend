import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Access() {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">General</h2>
        <div className="flex items-center mb-4">
          <Button className="bg-[#1c2533] text-white border border-gray-600 mr-4">
            <PlusIcon className="h-6 w-6" />
            Change image
          </Button>
          <Input
            className="bg-[#1c2533] border-gray-600"
            placeholder="Workspace name"
          />
        </div>
        <Button className="bg-[#1c2533] text-white border border-gray-600">
          Save changes
        </Button>
      </div>
      <div className="pt-6 border-t border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Danger zone</h2>
        <p className="text-sm text-gray-500 mb-6">
          You shouldn't reach this part, unless you like to live dangerously
        </p>
        <Button className="bg-[#bd1e59] text-white">Delete workspace</Button>
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
