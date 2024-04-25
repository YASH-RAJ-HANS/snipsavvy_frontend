import React from 'react'
import { Logo } from './Logo'
function Navbar() {
  return (
    <div className='border-b border-zinc-600 text-white font-bold px-2 pt-2 bg-black'>
      <Logo className='text-3xl'/>
    </div>
  )
}

export default Navbar