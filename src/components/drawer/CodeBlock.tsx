'use client'
import React, {useState, useEffect} from 'react'
import 'prismjs';
import dummyCodeData from '@/dummydata';
import 'prismjs/themes/prism-okaidia.css'; 
import { LuCopyPlus } from "react-icons/lu";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function CodeBlock() {
    const [isEditable, setIsEditable] = useState(false);
    const [expandedBlocks, setExpandedBlocks] = useState(Array(dummyCodeData.length).fill(false));

    const toggleBlockExpand = (index: number) => {
      const newExpandedBlocks = [...expandedBlocks];
      newExpandedBlocks[index] = !newExpandedBlocks[index];
      setExpandedBlocks(newExpandedBlocks);

      setTimeout(()=> {
        window.Prism.highlightAll();
      }, 0);
  };

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

      return (
        <div>
      <button onClick={toggleEditable} className='bg-white text-black rounded-xl hover:bg-black hover:text-white hover:duration-300 p-1 transition-all duration-300 ease-in-out border-2 border-black hover:border-white'>
        {isEditable ? 'Disable Editing' : 'Enable Editing'}
      </button>
      <div>
        {dummyCodeData.map((item, index) => (
            <div key={index} className='py-2'>
                <h2 className='text-md font-bold text-white'>{item.title}</h2>
                <div className="relative">
                <button className="absolute top-0 right-0 text-zinc-100 font-bold bg-blue-500 hover:bg-blue-400 duration-300 rounded-3xl p-2" onClick={() => copyToClipboard(item.code)}><LuCopyPlus /></button>
                <ToastContainer />
                <button onClick={() => toggleBlockExpand(index)} className='absolute top-0 right-8 text-zinc-100 bg-blue-500 hover:bg-blue-400 duration-300 rounded-3xl p-2 mx-2'>
                  {expandedBlocks[index] ? <FaMinus /> : <FaPlus />}
                </button>
                {expandedBlocks[index] && (
                        <pre className='py-4'>
                            <code id="editable-code" className={`language-${item.language} ${isEditable ? 'text-black' : 'text-white'}`} contentEditable={isEditable}>
                                {item.code}
                            </code>
                        </pre>
                    )}
                </div>
            </div>
        ))}
      </div>  
    </div>
      );
    };
export default CodeBlock