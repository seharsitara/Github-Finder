import React, { useState ,useContext} from 'react'
import GithubContext from './GithubContext'


function Search() {
    
  const[text,setText]=useState('')
  const[showError,setShowError]=useState(false);

   const {users,searchUsers,clearUsers}=useContext(GithubContext)

  const handleChange=(e)=>{
   console.log(e.target.value)
   setText(e.target.value);
   setShowError(false)
    
  }

  const handleSubmit=(e)=>{
     e.preventDefault();
     console.log("hello")
    
     console.log(`here is final text ${text}`)

     if(text.trim()===''){
      setShowError(true);
     }
     else{
     setShowError(false);
        searchUsers(text);
        setText('')
     }
     
  }

  

  return (
    <>
    
    <div className="flex justify-center items-center md:w-full w-9/12 lg:w-full xl:w-full mx-auto mb-12 mt-12">
  
  <form className="max-w-lg flex-grow"
     onSubmit={handleSubmit}>
    <div className="relative w-full">
      <input
      
        type="text"
        id="search-dropdown"
        value={text}
        className="block p-3 w-full text-sm md:text-lg text-white bg-gray-50 rounded-s-lg rounded-e-lg border-s-slate-700 border-s-2 border border-slate-900 focus:ring-slate-700 focus:border-slate-700 dark:bg-slate-700 dark:border-s-slate-700 dark:border-gray-600 dark:placeholder-slate-400 dark:text-white dark:focus:border-slate-500"
        placeholder="Search"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="absolute top-0 end-0 p-3 text-sm md:text-lg font-medium h-full text-white bg-slate-900 rounded-e-lg border border-slate-900 hover:bg-slate-900 focus:outline-none dark:bg-slate-900 dark:hover:bg-slate-800"
      >
        Go
      </button>
    </div>
  </form>

  {users.length > 0 && <button  onClick={clearUsers}
  className="ml-4 md:p-3.5 p-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800">
    Clear
  </button> }

  
  
</div>

{showError && (
          <div className="flex items-center justify-center mt-1 ">
            <div className="flex items-center justify-center w-4 h-4 rounded-full bg-red-100">
              <span className="text-red-500 text-lg font-bold md:pb-1 sm:pb-1 pb-1">&times;</span>
            </div>
            <p className="ml-2 text-red-600 lg:text-md md:text-sm text-xs lg:font-semibold md:font-medium  sm:font-normal font-light">
              Please enter something to search!
            </p>
          </div>
        )}
      
    
    </>
  )
}

export default Search
