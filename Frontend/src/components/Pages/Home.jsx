import React from 'react';
import Navbar from '../component/Navbar';
import Header from '../component/Header';
import Footer from '../component/Footer'; 
import BlogList from '../component/BlogList';

function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-black">
            <Navbar />
            <div className='line flex justify-center'>
                <hr className='w-[95vw] mt-2 bg-white h-0.5' />
            </div>
            <Header />
            <div className='max-w-[80vw] flex-grow mx-auto my-8'>
                <h2 className='text-white text-4xl font-bold'>Social Media Trending Blogs</h2>
                <div className='flex justify-between min-w-[10vw] p-4 mt-5 border-1 border-white rounded-2xl'>
                    <input type="text" placeholder="Search Bloges" className=' w-80 text-white outline-none' />
                    <button className=' text-white font-bold py-2 px-4 border-1 rounded hover:bg-white hover:text-black cursor-pointer'>Search</button>
                </div>
                <div className='mt-10'>
                    <BlogList />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
