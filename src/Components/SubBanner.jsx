import React from 'react';

const SubBanner = () => {
    return (
        <div className='grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-4 my-20 bg-[rgb(136,201,13)] p-10 justify-center items-center'>
            <img className='w-[150px] mx-auto md:block hidden' src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/29128/cartoon-robot-clipart-md.png" alt="" />
            <div className='text-white md:text-left text-center'>
                <p className='text-lg font-semibold'>ALL TOYS</p>
                <h1 className='text-5xl font-semibold'>Get 20% off</h1>
                <h1 className='text-5xl'>for first order</h1>
            </div>
            <div className='flex items-start mx-auto'>
                <input className='w-[280px] bg-[#0c0c0000] text-[#9C29B2] outline-none border-[1px] rounded-3xl px-5 py-2' placeholder='Enter email address' type="text" name="" id="" />
                <button><img className='w-10 -ml-10 mt-[1px] absolute' src="https://static-00.iconduck.com/assets.00/arrow-right-circle-icon-512x512-2p1e2aaw.png" alt="" /></button>
            </div>
            <img className='w-[160px] mx-auto md:block hidden' src="https://static.vecteezy.com/system/resources/previews/014/012/692/original/kids-toy-robot-smiling-illustration-png.png" alt="" />
        </div>
    );
};

export default SubBanner;