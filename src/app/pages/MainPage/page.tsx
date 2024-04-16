import Sidebar from '@/components/workspace/Sidebar'
import Collection from '@/components/workspace/Collection'
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <Collection/>
    </div>
  )
}

export default page