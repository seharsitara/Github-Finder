import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLink,faUtensils,faStar,faInfo,faEye} from "@fortawesome/free-solid-svg-icons"
import { useEffect,useContext } from 'react'
import { useParams } from 'react-router-dom'
import GithubContext from './GithubContext'
import {useNavigate} from "react-router-dom"


function Getuser() {

    const Navigate=useNavigate();
     const{user,getUser,repo,getUserRepo}=useContext(GithubContext);
     const params=useParams();
  useEffect(()=>{
        getUser(params.login)
        getUserRepo(params.login)
  },[])

  const handleBackBtn=()=>{
    Navigate("/");
  }

  const {
    avatar_url,
    login,
    followers,
    following,
    public_gists,
    public_repos,
    repos,
    html_url,
    blog

  }=user

  const {
     
  stargazers_count,
  forks,
  watchers_count,
   open_issues

  }=repo

  return (
    <>
    
    <div className="bg-slate-800 flex justify-center items-center min-h-screen">
  <div /*style={{ backgroundColor: "#F3F7EC" }} */className="bg-slate-800 p-6 rounded-lg shadow-xl  md:mx-16 mx-10 lg:my-2 my-16 w-full max-w-6xl">
    {/* Go Back Button */}
    <div className="flex items-center mb-4">
      <button
        onClick={handleBackBtn}
        className="flex items-center bg-blue-600 text-white px-4 py-1 pb-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
      >
        <span className="font-medium">&larr;</span> {/* Simple Left Arrow */}
        
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column: User Info */}
      <div className="md:border-r border-gray-300 md:pr-4">
        {/* Photo */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={user.avatar_url}
            alt="User Avatar"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-gray-300 mb-4"
          />
          {/* Name */}
          <h2 style={{ color: '#F3F7EC' }} className="text-xl sm:text-2xl font-semibold ">
            {user.login}
          </h2>
          {/* Hirable */}
<div className="mt-4 flex justify-center items-center">
  <span
    className={`px-2 py-1 text-sm font-normal rounded-lg border ${
      user.hireable
        ? "border-green-500 text-green-500"
        : "border-red-500 text-red-500"
    }`}
  >
    Hirable
  </span>
</div>
   {/* Location */}
          {user.location && (
            <p style={{ color: '#F3F7EC' }} className="text-sm text-white mt-2">📍 {user.location}</p>
            
          )}
        </div>

        {/* Bio */}
        <p style={{ color: '#F3F7EC' }} className=" text-sm leading-relaxed mb-6 text-center">
          {user.bio || "This user has no bio."}
        </p>

        {/* Following and Followers */}
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 border-t  border-gray-400 pt-4">
          <div  className="text-center border-r border-gray-400">
            <p style={{ color: '#F3F7EC' }} className="text-sm ">Following</p>
            <p style={{ color: '#F3F7EC' }} className="font-bold ">{user.following}</p>
          </div>
          <div  className="text-center lg:border-r border-gray-400">
            <p style={{ color: '#F3F7EC' }} className="text-sm">Followers</p>
            <p style={{ color: '#F3F7EC' }} className="font-bold">{user.followers}</p>
          </div>
    
          <div  className="text-center border-r border-gray-400 ">
            <p style={{ color: '#F3F7EC' }} className="text-sm ">Public gists</p>
            <p style={{ color: '#F3F7EC' }} className="font-bold">{user.public_gists}</p>
          </div>
          <div className="text-center">
            <p style={{ color: '#F3F7EC' }} className="text-sm">Public repos</p>
            <p style={{ color: '#F3F7EC' }} className="font-bold">{user.public_repos}</p>
          </div>
        </div>
        </div>
    

      {/* Right Column: Profile Links */}
      <div className="mt-6 md:mt-0">
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm block mb-2"
        >
          Visit GitHub Profile
        </a>
        {user.blog && (
          <a
            href={user.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Website
          </a>
        )}

        <div className='' >
            <h1 className='text-blue-500 text-xl sm:text-2xl font-semibold mt-5'>Top Repositries</h1>
            <ul style={{ color: '#F3F7EC' }} className=' py-5'>
        {repo.map((repos) => (
    <li className='py-5 px-4 shadow-md '
    key={repos.id}>
  <h3 className="text-lg font-semibold">
    <FontAwesomeIcon icon={faLink} style={{ color: '#F3F7EC' }} className=" mr-2" />
    <a style={{ color: '#F3F7EC' }}
      href={user.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      {repos.name}
    </a>
  </h3>
          <div className="mt-6 text-sm flex flex-row gap-4">
              <div style={{ backgroundColor: "#ECEBDE" }} className="flex items-center px-2 py-1 rounded-lg">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
                <span className="text-gray-500">{repos.stargazers_count}</span>
              </div>
              <div style={{ backgroundColor: "#ECEBDE" }} className="flex items-center px-2 py-1 rounded-lg">
                <FontAwesomeIcon icon={faUtensils} className="text-red-400 mr-1" />
                <span className="text-gray-500">{repos.forks}</span>
              </div>
              <div  style={{ backgroundColor: "#ECEBDE" }} className="flex items-center px-2 py-1 rounded-lg">
                <FontAwesomeIcon icon={faEye} className="text-blue-400 mr-1" />
                <span className="text-gray-500">{repos.watchers_count}</span>
              </div>
              <div style={{ backgroundColor: "#ECEBDE" }} className="flex items-center px-2 py-1 rounded-lg">
                <FontAwesomeIcon icon={faInfo} className="text-green-500 mr-1" />
                <span className="text-gray-500">{repos.open_issues}</span>
              </div>
            
  </div>
  
  </li>
  ))}
  </ul>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Getuser
