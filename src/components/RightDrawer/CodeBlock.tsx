'use client'
import React, {useState, useEffect} from 'react'
import 'prismjs';
import dummyCodeData from '@/dummydata';
import 'prismjs/themes/prism-twilight.css'; 
import { LuCopyPlus } from "react-icons/lu";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import { MdEdit } from "react-icons/md";
import { TbPencilCancel } from "react-icons/tb";
import { CiShare2 } from "react-icons/ci";
import ShareSnippet  from './ShareSnippet';

function CodeBlock() {
    const [isEditable, setIsEditable] = useState(false);
    const [showBox, setShowBox] = useState(false);

    useEffect (() => {
        window.Prism.highlightAll();
    }, []);
   
  const toggleEditable = () => {
    setIsEditable(!isEditable);
    const codeElement = document.getElementById('editable-code');
    if (codeElement) {
      codeElement.contentEditable = isEditable ? 'false' : 'true';
    }
  };
    

  const copyToClipboard = (code : string) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        // Code successfully copied to clipboard
        toast.success('Code copied to clipboard')
      })
      .catch((error) => {
        // Unable to copy to clipboard
        console.error('Unable to copy code to clipboard', error);
      });
  };

  const toggleBox = () => {
    setShowBox(true);
  }
    
      return (
        <div>
      
      <div>
            <div className='py-2'>
                <h2 className='text-md text-white bg-["#131415"] p-2 font-semibold'>{dummyCodeData[0].title}</h2>
                <div className="relative">
                <button className="absolute -top-10 right-0 text-zinc-100 font-bold bg-zinc-900 hover:bg-zinc-700 border border-zinc-100 duration-300 rounded-sm p-2" onClick={() => copyToClipboard(dummyCodeData[0].code)}><LuCopyPlus /></button>
                <ToastContainer />
                <button onClick={toggleEditable} className='absolute -top-10 right-6 text-zinc-100 bg-zinc-900 hover:bg-zinc-700 border border-zinc-100 duration-300 rounded-sm p-2 mx-2'>
                  {isEditable ? <MdEdit /> : <TbPencilCancel />}
                </button>
                <button className="absolute -top-10 right-16 text-zinc-100 font-bold bg-zinc-900 hover:bg-zinc-700 border border-zinc-100 duration-300 rounded-sm p-2" onClick={toggleBox}><CiShare2 /></button>
                {showBox && <ShareSnippet onClose={() => setShowBox(false)}/>}
                <div className='pt-1 rounded-b-md border-zinc-900 bg-zinc-900'>
                        <pre className='p-4'>
                            <code id="editable-code" className={`language-${dummyCodeData[0].language} ${isEditable ? 'text-black' : 'text-white'}`} contentEditable={isEditable}>
                                {dummyCodeData[0].code}
                            </code>
                        </pre>
                </div>
                </div>
            </div>
      </div>  
    </div>
      );
    };
export default CodeBlock