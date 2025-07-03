import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Navbar() {
    return (
        <div className='flex flex-wrap justify-between items-center w-full'>
            <div className="logo">
                <h4 className='text-blue-500 text-4xl mt-10 ml-10 font-bold '>Tredwise</h4>
            </div>
            <div className='flex flex-wrap items-center'>
                <ul className='flex'>
                    <li className='text-white mt-10 mr-10 font-bold cursor-pointer hover:text-blue-500'><a href="/home">Home</a></li>
                    <li className='text-white mt-10 mr-10 font-bold cursor-pointer hover:text-blue-500'><a href="/googleblogs">Goggle Bloges</a></li>
                    <li className='text-white  mt-10 mr-10 font-bold cursor-pointer hover:text-blue-500'><a href="/socialmediablogs">Social Media Bloges</a></li>
                </ul>
                <div>
                    <button className='border-2 flex items-center border-white text-white mt-10 mr-10 font-semibold px-4 py-1 rounded-xl hover:bg-white hover:text-black transition ease-in-out duration-300'>
                        Get Start
                        <FaArrowRight className='ml-2' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
