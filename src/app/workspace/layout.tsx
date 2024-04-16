import React from 'react'

type LayoutProps = {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='bg-white min-h-screen w-screen'>{children}</div>
  )
}

export default Layout