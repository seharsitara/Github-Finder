import React from 'react'



function About() {
  return (
    <div className='m-10'>
      {import.meta.env.VITE_GITHUB_URL}
      <h3>about</h3>
    </div>
  )
}

export default About;
