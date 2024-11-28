import React from 'react'
import { Link } from 'react-router-dom'

const UserItems=({ user: { login = "", avatar_url = "" } = {} })=> {


  return(
  <>
  <div className='card shadow-md flex flex-row items-center rounded-lg gap-3'>
     <div className='avatar'>
    <img  className='rounded-full h-12 w-12 m-2'
     src={avatar_url}>
    </img>
    </div>
     <div className='card-title'>
     <h2 >{login}</h2>
      <Link to={`user/${login}`}
      className='text-white text-opacity-40 my-4'>
      View Profile
      </Link>
     </div>
  </div>
  
  </>

  )
}

export default UserItems
