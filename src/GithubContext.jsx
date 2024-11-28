import React, { useState } from 'react';
import {createContext} from "react"

const GITHUB_TOKEN=import.meta.env.VITE_GITHUB_TOKEN
const GITHUB_URL=import.meta.env.VITE_GITHUB_URL

const GithubContext=createContext();

export const  GithubProvider=({children})=> {

  const [users,setUsers]=useState([]);
  const [loading,setLoading]=useState(true);


  const getUsers= async() => {
    
     const response= await fetch(`${GITHUB_URL}/users` ,{
      headers: {
        Authorization : `token ${GITHUB_TOKEN}`,
        },
     })
     const data = await response.json();
     console.log(data)
       
     setUsers(data);
     setLoading(false)
  }


return <GithubContext.Provider 
     value={{
      users,
      loading,
      getUsers
     }}
  >
    {children}
 </GithubContext.Provider>

}
export default GithubContext
