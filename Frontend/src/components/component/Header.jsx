import React from 'react'

function Header() {
  return (
    <div className='sm:flex flex-wrap justify-between items-start w-full'>
      <div className=' max-w-[70vw] ml-20 mt-10 p-10'>
        <h3 className='text-white text-6xl font-bold '>Welcome To Trendwise</h3>
        <p className='text-white text-2xl mt-3'>Explore the latest trends from Google, Tweeter, and other Social Media Platforms. Powered by AI</p>
      </div>
    </div>
  )
}

export default Header
