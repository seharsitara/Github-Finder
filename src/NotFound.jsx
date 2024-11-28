import React from 'react'
import notfound from './assets/notfound.png';

function NotFound() {
  return (
    
    <div>
      <img  className='m-auto h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32'
      src={notfound}
      ></img>
      </div>
  )
}

export default NotFound
