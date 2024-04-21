import React from 'react'
import Collection from "@/components/workspace/Collection";
import Sidebar from "@/components/workspace/Sidebar";
import Drawer from "@/components/drawer/Drawer";
import SnippetSection from '@/components/snippet/snippet';

type LayoutProps = {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='bg-zinc-800 min-h-screen w-screen flex'>
      <div className="w-1/4 bg-zinc-600 flex">
        {/* Sidebar content goes here */}
        <Sidebar/>
        <Collection/>
        
      </div>
      {children}
    </div>
  )
}

export default Layout