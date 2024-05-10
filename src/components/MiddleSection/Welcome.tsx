import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from 'next/image'
const Welcome = () => {
  const searchParams = useSearchParams();

  const workspace = searchParams.get("workspace") || "";
  const collection = searchParams.get("collection") || "";
  return (
    <div className="flex flex-col justify-around items-center h-[80vh]">
      {/* <h2 className="text-4xl font-semibold flex justify-start">
        Welcome to SnipSavvy
      </h2> */}
      <Image
      src="/welcome_logo.png"
      className="opacity-30 grayscale"
      width={800}
      height={200}
      alt="Picture of the author"
    />
      <div className="flex justify-around w-full">
        
        <div className="flex justify-center">
          <div
            style={{ borderRadius: "10px" }}
            className="max-w-sm p-6 bg-zinc-950 border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 w-96 h-52"
          >
            <svg
              className="w-7 h-7 text-gray-200 dark:text-gray-400 mb-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
            </svg>
            <a href="#" className="flex">
              <h5 className="mb-2 text-normal font-semibold tracking-tight text-blue-600 hover:underline mr-2">
                New Workspace
              </h5>

              <h5 className="mb-2 text-normal font-semibold text-gray-300">
                Create new Workspace
              </h5>
            </a>
            <a href="#" className="flex">
              <h5 className={`${workspace!="" ? "text-blue-600 " : "text-gray-600"}  mb-2 text-normal font-semibold tracking-tight  hover:underline mr-2`}>
                New Collection
              </h5>
              <h5 className="mb-2 text-normal font-semibold text-gray-300">
                Create new Collection
              </h5>
            </a>
            <a href="#" className="flex">
              <h5 className={`${workspace!=""&& collection!="" ? "text-blue-600 " : "text-gray-600"}  mb-2 text-normal font-semibold tracking-tight  hover:underline mr-2`}>
                New Snippet
              </h5>
              <h5 className="mb-2 text-normal font-semibold text-gray-300">
                Create a new Snippet
              </h5>
            </a>
            {/* <div className="flex">
              <p className="mb-3 font-normal text-blue-600 hover:underline mr-2">
                Add Snippet
              </p>
              <h5 className="mb-2 text-normal font-semibold text-gray-300">
                Create new Snippet
              </h5>
            </div> */}

            <a
              href="#"
              className="inline-flex font-normal items-center text-blue-600 hover:underline"
            >
              See our guideline
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div>
        {/* <div>
          <ol className="items-center sm:flex">
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-200 dark:text-white">
                  Create Workspace
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-300 dark:text-gray-500">
                  Click on Add Modal
                </time>
                <p className="text-base font-normal text-gray-400 dark:text-gray-400">
                  Get started with your own Workspace.
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-200 dark:text-white">
                  Create Collections
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-300 dark:text-gray-500">
                  Click on Add Collections
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Created a Collection for your snippets.
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-200 dark:text-white">
                  Create Snippet
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-300 dark:text-gray-500">
                  Click on Add Snippet
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Created a Snippet Section and share with your friends.
                </p>
              </div>
            </li>
          </ol>
        </div> */}
      </div>
    </div>
  );
};

export default Welcome;
