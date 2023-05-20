import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const MainBanner = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='shadow-2xl shadow-black/5 dark:shadow-black/30'>
            <div className="hero min-h-[450px]" style={{ backgroundImage: `url("https://i.ibb.co/42LPyN9/Colorful-Robotics-Rules-Technology-Presentation-1.png")` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold text-white">Hello! Welcome to <br /> <span className='text-[#9C29B2]'>Robo</span> <span className='text-[#88C90D]'>House</span></h1>
                        <p className="mb-5 p-3 text-white text-xl shadow-2xl bg-[#00000059] rounded">Your one-stop destination for all things robotic and interactive for kids! Our website is a magical virtual realm where children can explore an exciting array of toy robot houses that combine cutting-edge technology with imaginative play.</p>
                        {
                            !user && <Link to="/login"><button className="btn text-[#9C29B2] font-bold bg-[#88C90D] border-none">Get Started</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;