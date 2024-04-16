import React from 'react'
import { FaFolderOpen } from "react-icons/fa";

const Collection = () => {
    const  Collections = [
        {
            name:'CodeSnippet',
            color:'#2E135D'
        },
        {
            name:'Work',
            color:'#164D41'
        },
        {
            name:'School',
            color:'#4A173E'
        },
        {
            name:'Personal',
            color:'#2E135D'
        },
        {
            name:'Projects',
            color:'#164D41'
        },
        {
            name:'Ideas',
            color:'#4A173E'
        }
    ]
  return (
    <div className='h-screen w-25vw border-l-2 border-slate-700  bg-[#1E1F21]'>
        <div>
            <div className='flex m-10 '>
                <div className='mr-3   '>
                    <FaFolderOpen />
                </div>
                <p className='pr-10 text-sm text-slate-200 font-bold'>
                    COLLECTIONS
                </p>
                <button className='font-extrabold -mt-1.5 text-lg'>
                    +
                </button>
            </div>
            <div className='-mt-5 ml-5'>
                {Collections.map((collection, index) =>(
                    <div key= {index} className = 'h-14 w-14  m-auto ml-7 rounded-lg ' >
                        <p className='text-slate-400  text-lg flex text-sm'><span style={{ color: `${collection.color}` , marginRight:"10px", fontWeight:"100px"}}>•</span> {collection.name}</p>
                    </div>
                ))}
            </div>

        </div>

    </div>
  )
}

export default Collection