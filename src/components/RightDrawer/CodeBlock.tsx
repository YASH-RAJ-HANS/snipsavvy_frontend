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
import { Badge } from "@/components/ui/badge";
import { Input } from './Input';

interface props {
  isEditable: boolean;
  setIsEditable: any;
}
function CodeBlock({isEditable, setIsEditable}: props) {
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
  const colors = ['bg-purple-700', 'bg-indigo-700', 'bg-teal-700', 'bg-lime-700', 'bg-fuchsia-700'];
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState([''])
    
      return (
        <div className='overflow-hidden editable-code'>
          <div> 
            <h2 className='text-3xl text-white p-2 font-bold overflow-y-auto'>{snippet ? codeData.title : <Input className="outline-none" placeholder="Title..." onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value)
            }} />}</h2>
            <h2 className='text-lg text-white p-2 font-semibold mb-2'>{snippet ? codeData.description : <Input className="outline-none"  placeholder="Description..." onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDescription(e.target.value)
            }} />}</h2>
              <div className=''>
                {snippet && codeData.tags ? codeData.tags.map((tag:any) => (
                <div className='inline-flex'>
                  <Badge variant="default" className='px-2 py-1 rounded-xl bg-purple-700 hover:bg-purple-500 mx-1 mb-2'>{tag}</Badge>
                </div>
                )): <Input className="w-[95%] transform translate-x-3 outline-none"  placeholder="Tags..." onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTags(e.target.value.split(','))
                }}/>}
                <div className="">
                {snippet &&
                <div className='relative mt-12'>
                
                <button onClick={toggleEditable} className='absolute -top-10 right-6 text-zinc-100 bg-zinc-900 hover:bg-zinc-700 border border-zinc-100 duration-300 rounded-sm p-2 mx-2'>
                  {isEditable ? <MdEdit /> : <TbPencilCancel />}
                </button>
                <button className="absolute -top-10 right-0 text-zinc-100 font-bold bg-zinc-900 hover:bg-zinc-700 border border-zinc-100 duration-300 rounded-sm p-2" onClick={() => copyToClipboard(codeData.code)}><LuCopyPlus /></button>
                <ToastContainer />
                <button className="absolute -top-10 right-16 text-zinc-100 font-bold bg-zinc-900 hover:bg-zinc-700 border border-zinc-100 duration-300 rounded-sm p-2" onClick={toggleBox}><CiShare2 /></button></div>}
                
                {showBox && <ShareSnippet onClose={() => setShowBox(false)}/>}
                <div className='min-h-[50vh] min-w-[40vw] w-[47vw] fixed py-2 rounded-b-md border-zinc-900 bg-zinc-900'>
                    {snippet ? <pre className='p-4 outline-none'>
                            <code id="editable-code" className={`language-javascript ${isEditable ? 'text-black' : 'text-white'} outline-none`} contentEditable={isEditable}>
                                {cleanCode}
                            </code>
                        </pre> : 
                        <div>
                        <pre className='p-2 mt-6 min-h-[35vh] min-w-[40vw] w-[47vw]'>
                            <code id="editable-code" className={`language-javascript ${isEditable ? 'text-black' : 'text-white'} outline-none`} contentEditable={isEditable}>
                                {''}
                            </code>
                        </pre>
                        <button className='text-white bg-black px-3 py-1 rounded-xl hover:bg-zinc-900 duration-300 mt-2'>Save</button>
                        </div>
                        }
                        
                </div>
                </div>
            </div>
      </div>  
    </div>
      );
    };
export default CodeBlock