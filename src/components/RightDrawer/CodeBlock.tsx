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
    const collection = searchParams.get('collection') ? searchParams.get('collection') : ''
    const workspace = searchParams.get('workspace') ? searchParams.get('workspace') : ''
    useEffect (() => {
      window.Prism.highlightAll()
    },[])
    useEffect (() => {
        const fetchCode = async() => {
          await axios.get('https://snipsavvy.onrender.com/v1/api/snippet?snippet_id=' + `${snippet}`)
          .then(response => {
            console.log(response.data)
            setCodeData(response.data)
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
  const flag = Array.isArray(codeData) ? true : false

  const cleanCode = flag===true && codeData[0].code.trim().replace(/`/g, '')
  const colors = ['bg-purple-700', 'bg-indigo-700', 'bg-teal-700', 'bg-lime-700', 'bg-fuchsia-700'];
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("");
  const [data, setData] = React.useState({
    title: "",
    description: "",
    code: "",
    tags: [],
    category_id: "",
  });


  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagInput) {
      e.preventDefault();
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };


  const handleCreateSnippet = async () => {
    const body = {
      title: data.title,
      description: data.description,
      code: data.code,
      tags: tags,
      category_id: `${collection}`,
      workspace_id: `${workspace}`
    };

    {
      collection &&
        (await axios
          .post("https://snipsavvy.onrender.com/v1/api/snippet", body)
          .then(
            (response) => {
              console.log(response);
            },
            (error) => {
              console.log(error);
            }
          ));
    }
    window.location.reload()

  };

  const languages = ['Python', 'JavaScript', 'Java', 'TypeScript', 'C++'];
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleClick = () => {
    
  }

      return (
        <div className='overflow-hidden outline-none' id="editable-code">
        <div>
            <h2 className='text-3xl text-white p-2 font-bold overflow-y-auto'>{snippet && flag===true ? codeData[0].title : <Input className="outline-none" value={data.title} placeholder="Title..." onKeyDown={handleClick} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setData({...data, title: e.target.value})
            }} />}</h2>
            <h2 className='text-lg text-white p-2 font-semibold mb-2 '>{snippet && flag===true ? codeData[0].description : <Input onKeyDown={handleClick} className="outline-none" value={data.description}  placeholder="Description..." onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setData({...data, description: e.target.value})
            }} />}</h2>
            {!snippet && <div className="bg-zinc-900 p-2">
            <select className='bg-zinc-900 shadow-zinc-950 shadow-xl text-white p-2' value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))} 
            </select> </div>}
              <div className=''>
                {snippet && flag===true ? codeData[0].tags.map((tag:any) => (
                <div className='inline-flex'>
                  <Badge variant="default" className='px-2 py-1 rounded-xl bg-purple-700 hover:bg-purple-500 mx-1 mb-2'>{tag}</Badge>
                </div>
                )): <div className='transform translate-x-3'> <Input value={tagInput} onKeyDown={ 
                  handleAddTag} className="w-[95%] mb-4  outline-none"  placeholder="Tags..." onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTagInput(e.target.value) 
                }} />  <Badge  variant="default" className='px-2 py-1 rounded-xl bg-purple-700 hover:bg-purple-500 mx-1 mb-2'>{selectedLanguage}</Badge> 
                {tags.length>0 && tags?.map((tag) => {
                  return <Badge variant="default" className='px-2 py-1 rounded-xl bg-purple-700 hover:bg-purple-500 mx-1 mb-2' >{tag}</Badge>
                })}
                </div>
                }

                <div className="">
                {snippet &&
                <div className='relative mt-12'>
                
                <button onClick={toggleEditable} className='absolute -top-10 right-6 text-zinc-100 bg-zinc-900 hover:bg-zinc-700 border border-zinc-100 duration-300 rounded-sm p-2 mx-2'>
                  {isEditable ? <MdEdit /> : <TbPencilCancel />}
                </button>
                <button className="absolute -top-10 right-0 text-zinc-100 font-bold bg-zinc-900 hover:bg-zinc-700 border border-zinc-100 duration-300 rounded-sm p-2" onClick={() => copyToClipboard(codeData[0].code)}><LuCopyPlus /></button>
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
                        <pre className='p-2 mt-6 min-h-[35vh] min-w-[40vw] w-[47vw] h-[40vh]'>
                            <code id="editable-code" className={`language-${selectedLanguage} ${isEditable ? 'text-black' : 'text-white'}  outline-none`} contentEditable={isEditable}>
                              <textarea className='bg-zinc-900 h-[95%] w-full text-white border-none outline-none' value={data.code} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                              setData({...data, code: e.target.value})
                            }} />
                            </code>
                        </pre>
                        <button className='text-white bg-black px-3 py-1 rounded-xl hover:bg-zinc-900 duration-300 mt-2' onClick={() => handleCreateSnippet()}>Save</button>
                        <ToastContainer />
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