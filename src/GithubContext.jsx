import React, { useState } from 'react';
import {createContext} from "react"


const GITHUB_TOKEN=import.meta.env.VITE_GITHUB_TOKEN
const GITHUB_URL=import.meta.env.VITE_GITHUB_URL

const GithubContext=createContext();

export const  GithubProvider=({children})=> {

  const [users,setUsers]=useState([]);
  const [loading,setLoading]=useState(false);


  const searchUsers= async(text) => {
    setLoading(true)
    
    const params= new URLSearchParams({
      q: text
    })
     const response= await fetch(`${GITHUB_URL}/search/users?${params}` ,{
      headers: {
        Authorization : `token ${GITHUB_TOKEN}`,
        },
     })
     const {items} = await response.json();
     console.log(items)
       
     setUsers(items);
     setLoading(false)
  }

  const clearUsers=()=>{
    setUsers([]);
  }

return <GithubContext.Provider 
     value={{
      users,
      loading,
      searchUsers,
      clearUsers
     }}
  >
    {children}
 </GithubContext.Provider>

}
export default GithubContext
