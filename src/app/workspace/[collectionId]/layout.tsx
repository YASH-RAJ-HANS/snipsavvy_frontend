import React from 'react'
import RightDrawer from '@/components/drawer/Drawer';

type LayoutProps = {
    children: React.ReactNode;
}

const CollectionLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
        <RightDrawer />

        {children}
    </div>
  )
}

export default CollectionLayout