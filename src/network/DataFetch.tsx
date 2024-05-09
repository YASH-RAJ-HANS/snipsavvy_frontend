"use client";
import axios from "axios";

export async function DataFetch({ url, setState }: any) {
  try {
    console.log("url=>", url);
    const resp = await axios.get(url).then((response) => {
      console.log("data=>", response);
      setState(response.data);
    });
    return resp;
  } catch (error) {
    throw error;
  }
}
