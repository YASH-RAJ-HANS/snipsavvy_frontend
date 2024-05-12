'use client'
import React, {useEffect} from 'react'
import {redirect} from 'next/navigation'

const Unauthorized = () => {
    useEffect (()=> {
        setTimeout(redirect('/'), 10000)
    })
    return (
        <div className='text-white text-4xl '>Sorry, you are not authorized to access this page.</div>
    )
}

export default Unauthorized