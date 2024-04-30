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
import axios from 'axios'
import { useSearchParams } from 'next/navigation';
import { Badge } from "@/components/ui/badge"

function CodeBlock() {
    const [isEditable, setIsEditable] = useState(false);
    const [showBox, setShowBox] = useState(false);
    const [codeData, setCodeData] = useState<any>({})
    const searchParams = useSearchParams()
    const snippet = searchParams.get('snippet') ? searchParams.get('snippet') : ''
    useEffect (() => {
      window.Prism.highlightAll()
    },[])
    useEffect (() => {
        const fetchCode = async() => {
          await axios.get('https://snipsavvy.onrender.com/v1/api/snippet?snippet_id=' + `${snippet}`)
          .then(response => {
            console.log(response.data.data[0])
            setCodeData(response.data.data[0])
          }).catch(error => {
            console.log(error)
          })
        }
        snippet && fetchCode()

        window.Prism.highlightAll();

        return() => {

        }
    }, [snippet]);
   
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

  const cleanCode = codeData.code && codeData.code.trim().replace(/`/g, '')
    
      return (
        <div>
          <div> 
            <h2 className='text-2xl text-white px-2 font-bold overflow-y-auto'>{codeData.title}</h2>
            <h2 className='text-lg text-white px-2 font-semibold mb-2'>{codeData.description}</h2>
              <div className=''>
                {codeData.tags && codeData.tags.map((tag:any) => (
                <div className='inline-flex'>
                  <Badge variant="default" className='px-2 py-1 rounded-xl bg-purple-700 hover:bg-purple-500 mx-1 mb-2'>{tag}</Badge>
                </div>
                ))}
                <div className="relative">
                <button className="absolute -top-10 right-0 text-zinc-100 font-bold bg-zinc-900 hover:bg-zinc-700 border border-zinc-100 duration-300 rounded-sm p-2" onClick={() => copyToClipboard(codeData.code)}><LuCopyPlus /></button>
                <ToastContainer />
                <button onClick={toggleEditable} className='absolute -top-10 right-6 text-zinc-100 bg-zinc-900 hover:bg-zinc-700 border border-zinc-100 duration-300 rounded-sm p-2 mx-2'>
                  {isEditable ? <MdEdit /> : <TbPencilCancel />}
                </button>
                <button className="absolute -top-10 right-16 text-zinc-100 font-bold bg-zinc-900 hover:bg-zinc-700 border border-zinc-100 duration-300 rounded-sm p-2" onClick={toggleBox}><CiShare2 /></button>
                {showBox && <ShareSnippet onClose={() => setShowBox(false)}/>}
                <div className='min-h-[50vh] min-w-[40vw] w-[47vw] fixed pt-1 rounded-b-md border-zinc-900 bg-zinc-900'>
                        <pre className='p-4'>
                            <code id="editable-code" className={`language-javascript ${isEditable ? 'text-black' : 'text-white'}`} contentEditable={isEditable}>
                                {cleanCode && cleanCode}
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