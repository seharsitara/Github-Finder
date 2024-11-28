import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import GithubContext from '../GithubContext'
import UserItems from './UserItems'
import spinner from "../assets/spinner.gif"



function UserResult() {

  const {users,loading,getUsers}=useContext(GithubContext)
  console.log({ users, loading });
  useEffect(()=>{

    getUsers()

  },[]);
  


   if(!loading){
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14'>
      {users.map((user)=>{
 return ( 
           <UserItems key={user.id} user={user}/>
  )
      
      
   })}
    </div>
  )
}
else{
  return(
    <img className='m-auto h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32'
    src={spinner}
    ></img>
  )
}
}

export default UserResult
