import React from 'react';

const Sponsors = () => {
    return (
        <div className='grid md:grid-cols-5 grid-cols-2 gap-5 md:gap-0 justify-center my-20'>
            <img className='cursor-pointer mx-auto' src="https://toyman-demo.myshopify.com/cdn/shop/files/logo1_compact.png?v=1676127525" alt="" />
            <img className='cursor-pointer mx-auto' src="https://toyman-demo.myshopify.com/cdn/shop/files/logo2_compact.png?v=1676127525" alt="" />
            <img className='cursor-pointer mx-auto' src="https://toyman-demo.myshopify.com/cdn/shop/files/logo3_compact.png?v=1676127524" alt="" />
            <img className='cursor-pointer mx-auto' src="https://toyman-demo.myshopify.com/cdn/shop/files/logo5_compact.png?v=1676127524" alt="" />
            <img className='cursor-pointer mx-auto md:block hidden' src="https://toyman-demo.myshopify.com/cdn/shop/files/logo1_compact.png?v=1676127525" alt="" />
        </div>
    );
};

export default Sponsors;