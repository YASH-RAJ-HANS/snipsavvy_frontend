"use client"
import React, {useState} from 'react'
import RightDrawer from '@/components/drawer/Drawer';

type LayoutProps = {
    children: React.ReactNode;
}

const CollectionLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen ] = useState(false)
  return (
    <div>
        <RightDrawer isOpen={isOpen} setIsOpen={setIsOpen}/>
        {children}
    </div>
  )
}

export default CollectionLayout