import React from 'react'
import Collection from "@/components/LeftPanel/Collection";
import Sidebar from "@/components/LeftPanel/Sidebar";
type LayoutProps = {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='bg-zinc-800 min-h-screen w-screen flex'>
      <div className="vw-25  flex">
        {/* Sidebar content goes here */}
        <Sidebar/>
        
        {/* <Collection/> */}
          
      </div>
      
      {children}
    </div>
  )
}

export default Layout