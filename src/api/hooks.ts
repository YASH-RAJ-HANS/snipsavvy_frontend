import axios from 'axios';
import { useState } from 'react';

interface postProps {
    body: {},
    url: string
}
const usePost = async ({body, url}: postProps) =>{
    await axios.post(url, body)
    .then((response) => {
        console.log();
        
      }, (error) => {
        console.log(error);
        
      });

    }
const useFetch = async ({url}: postProps) =>{
    await axios.get(url)
    .then((response) => {
        console.log(response);
        
      }, (error) => {
        console.log(error);
        
      });
    }
const useDelete = async ({url}: postProps) =>{
    await axios.delete(url)
    .then((response) => {
        console.log(response);
        
      }, (error) => {
        console.log(error);
        
      });
    }
 const usePut = async ({body, url}: postProps) =>{
    await axios.put(url, body)
    .then((response) => {
        console.log(response);
        
      }, (error) => {
        console.log(error);
        
      });
 }
