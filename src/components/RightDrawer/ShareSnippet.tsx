'use client'
import React from 'react';
import { LuSendHorizonal } from "react-icons/lu";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LuCopyPlus } from "react-icons/lu";
import { MdCancel } from "react-icons/md";

interface ModalProps {
    onClose: () => void;
}

const ShareSnippet = ({ onClose } : ModalProps) => {

  const sendEmail = () => {
    toast.success('Email sent successfully!');
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast.success('Link copied to clipboard');
    });
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-black rounded-lg p-4 h-96 w-1/3">
        <button className="absolute top-2 right-2 text-white text-2xl" onClick={onClose}><MdCancel /></button>
        <h2 className="text-xl font-bold mb-4 text-white">Share Snippet</h2>
        <form className="mb-8 py-8">
          <label htmlFor="email" className="block mb-2 text-white font-semibold">Recipient Email</label>
          <input type="email" id="email" name="email" className="border border-gray-300 px-3 py-1 rounded-l-md w-[85%] text-black" required />
          <button className='border translate-y-0.5 hover:bg-zinc-600 duration-300 rounded-r-md p-2 border-zinc-100' type="submit" onClick={sendEmail}><LuSendHorizonal />
          </button>
        </form> 
        <ToastContainer />
        <div className='border border-gray-500'></div>
        <div className='flex justify-center items-center flex-col'>
          <h1 className='text-white text-xl font-semibold py-2'>Do not want to send the email?</h1>
          <h1 className='text-white py-2 font-semibold'>Copy the URL</h1>
          <button onClick={copyLink} className='rounded-3xl text-xl border p-2 justify-center items-center my-1'><LuCopyPlus /></button>
        </div>
      </div>
    </div>
  );
};

export default ShareSnippet;