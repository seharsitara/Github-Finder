import React, { useState } from 'react';
import {createContext} from "react"


const GITHUB_TOKEN=import.meta.env.VITE_GITHUB_TOKEN
const GITHUB_URL=import.meta.env.VITE_GITHUB_URL

const GithubContext=createContext();

export const  GithubProvider=({children})=> {

  const [users,setUsers]=useState([]);
  const [user,setUser]=useState({});
  const [repo,setRepo]=useState([]);
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



  const getUser= async(login) => {
    setLoading(true)
    
    
     const response= await fetch(`${GITHUB_URL}/users/${login}` ,{
      headers: {
        Authorization : `token ${GITHUB_TOKEN}`,
        },
     })

     if(response.status===404){
      window.location="/notfound"
     }else{
      const data= await response.json();
     console.log(data)
       
     setUser(data);
     setLoading(false)
  }
     }
     
     const getUserRepo= async(login) => {
      setLoading(true)
      
      const params= new URLSearchParams({
        sort:"created",
        per_page: 10
      })
       const response= await fetch(`${GITHUB_URL}/users/${login}/repos?${params}` ,{
        headers: {
          Authorization : `token ${GITHUB_TOKEN}`,
          },
       })
  
       
        const data= await response.json();
       console.log(data)
         
       setRepo(data);
       setLoading(false)
  
       }

  const clearUsers=()=>{
    setUsers([]);
  }

return <GithubContext.Provider 
     value={{
      users,
      user,
      repo,
      loading,
      searchUsers,
      clearUsers,
      getUser,
      getUserRepo,
     }}
  >
    {children}
 </GithubContext.Provider>

}
export default GithubContext
