import React from 'react';

const Carousel = () => {
    return (
        <div className='flex mx-auto max-w-[1100px] my-20'>
            <div className='w-1/2'>
                <h1 className='text-[#9C29B2] text-3xl font-semibold'>More About Us</h1>
                <p className='text-5xl font-bold text-[#88C90D] my-3'>Special Care For Your Children</p>
                <p>Safety is our utmost priority, and all our toy robots undergo rigorous testing to meet the highest industry standards. We understand the importance of providing a secure play environment for children, so you can have peace of mind while your little ones enjoy their robotic companions.</p>
                <button className='me-10 border-2 p-1 hover:text-white duration-500 hover:bg-[#74b300] rounded-2xl w-40  my-4 mx-auto border-[#88C90D]'>Contact Us</button>
            </div>
            <div className='w-1/2'>
                <div className="carousel w-full shadow-2xl rounded-xl">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/W05G3kS/Colorful-Robotics-Rules-Technology-Presentation-3.png" className="w-full" />
                        <div className="absolute flex gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide4" className="btn btn-circle bg-[#3a3a336c] hover:bg-[#9C29B2] border-none hover:border-[#88C90D] ">❮</a>
                            <a href="#slide2" className="btn btn-circle bg-[#3a3a336c] hover:bg-[#9C29B2] border-none hover:border-[#88C90D] ">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/6yw8hdp/Colorful-Robotics-Rules-Technology-Presentation-4.png" className="w-full" />
                        <div className="absolute flex gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide1" className="btn btn-circle bg-[#3a3a336c] hover:bg-[#9C29B2] border-none hover:border-[#88C90D] ">❮</a>
                            <a href="#slide3" className="btn btn-circle bg-[#3a3a336c] hover:bg-[#9C29B2] border-none hover:border-[#88C90D] ">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/Jjw1vz9/Colorful-Robotics-Rules-Technology-Presentation-2.png" className="w-full" />
                        <div className="absolute flex gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide2" className="btn btn-circle bg-[#3a3a336c] hover:bg-[#9C29B2] border-none hover:border-[#88C90D] ">❮</a>
                            <a href="#slide4" className="btn btn-circle bg-[#3a3a336c] hover:bg-[#9C29B2] border-none hover:border-[#88C90D] ">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/nr0WYVt/Colorful-Robotics-Rules-Technology-Presentation.png" className="w-full" />
                        <div className="absolute flex gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide3" className="btn btn-circle bg-[#3a3a336c] hover:bg-[#9C29B2] border-none hover:border-[#88C90D] ">❮</a>
                            <a href="#slide1" className="btn btn-circle bg-[#3a3a336c] hover:bg-[#9C29B2] border-none hover:border-[#88C90D] ">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;