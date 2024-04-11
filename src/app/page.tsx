import React from 'react';

/*declare module 'react' {
  interface JSX.IntrinsicElements {
    div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  }
}*/

export default function Home() {
  return (
    <div className=" h-screen">
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl text-gray-400 mb-8 text-left font-semibold"><span className="text-white font-semibold">SnippSavvy is the ultimate code snippet management tool.</span> We at SnipSavvy aim to improve developer experience by providing you with a platform where you can store and share code snippets</p>
        <button className="px-3 py-2 bg-white text-zinc-800 font-semibold rounded-3xl hover:bg-blue-400 duration-300 glow-gradient">Make your first workspace here</button>
      </div>
    </div>
  )
}