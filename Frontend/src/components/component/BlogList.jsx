import React from 'react'

function BlogList() {
    return (
        <div className='flex gap-12 text-white items-center justify-center'>
            <h2 className='hover:bg-gray-500 rounded-3xl w-10 px-2 py-1 transition duration-500 flex items-center'>
                <a href="">
                    All
                </a>
            </h2>
            <h2 className='hover:bg-blue-500 rounded-3xl w-24 px-2 py-1 transition duration-500 flex items-center'>
                <a href="">
                    Technology
                </a>
            </h2>
            <h2 className='hover:bg-red-500 rounded-3xl w-19 px-2 py-1 transition duration-500 flex items-center'>
                <a href="">
                    Startups
                </a>
            </h2>
            <h2 className='hover:bg-yellow-500 rounded-3xl w-18 px-2 py-1 transition duration-500 flex items-center'>
                <a href="">
                    LifeStyle
                </a>
            </h2>
            <h2 className='hover:bg-green-500 rounded-3xl w-18 px-2 py-1 transition duration-500 flex items-center'>
                <a href="">
                    Finance
                </a>
            </h2>
        </div>
    )
}

export default BlogList
