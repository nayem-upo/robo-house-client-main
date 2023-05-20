import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='bg-[#424240] grid md:grid-cols-4 grid-cols-1 gap-5 p-10'>
                <div>
                    <div className='flex items-center font-semibold normal-case text-xl'>
                        <img className='w-12' src="https://i.ibb.co/dP9qynR/robot-press-tineye-15.png" alt="" />
                        <NavLink className="text-3xl"><span className='text-[#9C29B2]'>Robo</span> <span className='text-[#88C90D]'>House</span></NavLink>
                    </div>
                    <p className='text-white py-3'>Unleash your imagination and embark on a robotic adventure with Robo House - where imagination meets technology!</p>
                    <div className='flex gap-2'>
                        <svg className='rounded-full p-1 cursor-pointer bg-[#3B5997] hover:bg-[#88C90D]' fill="#ffffff" width="45px" height="45px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00032"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" /></g></svg>
                        <svg className='rounded-full p-2 cursor-pointer bg-[#54ABF0] hover:bg-[#88C90D]' fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="45px" height="45px" viewBox="0 0 512 512" xmlSpace="preserve" stroke="#ffffff" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g id="7935ec95c421cee6d86eb22ecd12f847"> <path style={{ display: 'inline' }} d="M459.186,151.787c0.203,4.501,0.305,9.023,0.305,13.565 c0,138.542-105.461,298.285-298.274,298.285c-59.209,0-114.322-17.357-160.716-47.104c8.212,0.973,16.546,1.47,25.012,1.47 c49.121,0,94.318-16.759,130.209-44.884c-45.887-0.841-84.596-31.154-97.938-72.804c6.408,1.227,12.968,1.886,19.73,1.886 c9.55,0,18.816-1.287,27.617-3.68c-47.955-9.633-84.1-52.001-84.1-102.795c0-0.446,0-0.882,0.011-1.318 c14.133,7.847,30.294,12.562,47.488,13.109c-28.134-18.796-46.637-50.885-46.637-87.262c0-19.212,5.16-37.218,14.193-52.7 c51.707,63.426,128.941,105.156,216.072,109.536c-1.784-7.675-2.718-15.674-2.718-23.896c0-57.891,46.941-104.832,104.832-104.832 c30.173,0,57.404,12.734,76.525,33.102c23.887-4.694,46.313-13.423,66.569-25.438c-7.827,24.485-24.434,45.025-46.089,58.002 c21.209-2.535,41.426-8.171,60.222-16.505C497.448,118.542,479.666,137.004,459.186,151.787z"> </path> </g> </g></svg>
                        <svg className='rounded-full p-2 cursor-pointer bg-[#C8232C] hover:bg-[#88C90D]' width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11ZM18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5ZM14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13ZM16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13Z" fill="#ffffff" /> </g></svg>
                        <svg className='rounded-full p-2 cursor-pointer bg-[#0077B5] hover:bg-[#88C90D]' fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="45px" height="45px" viewBox="0 0 512 512" xmlSpace="preserve" stroke="#ffffff" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g id="7935ec95c421cee6d86eb22ecd125aef"> <path style={{ display: 'inline', fillRule: 'evenodd', clipRule: 'evenodd' }} d="M116.504,500.219V170.654H6.975v329.564H116.504 L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941 C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219 c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533 c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531 c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"> </path> </g> </g></svg>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-xl font-semibold text-white'>Details Info</h1>
                    <hr className='w-10' />
                    <div className='text-white flex flex-col mt-4'>
                        <Link className='hover:text-[#88C90D]'>Online Class</Link>
                        <Link className='hover:text-[#88C90D]'>Appointment</Link>
                        <Link className='hover:text-[#88C90D]'>About Us</Link>
                        <Link className='hover:text-[#88C90D]'>Our Team</Link>
                        <Link className='hover:text-[#88C90D]'>Upcomming Events</Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-white'>PRODUCTS</h1>
                    <hr className='w-10' />
                    <div className='text-white flex flex-col mt-4'>
                        <Link className='hover:text-[#88C90D]'>Simple Product</Link>
                        <Link className='hover:text-[#88C90D]'>Variable</Link>
                        <Link className='hover:text-[#88C90D]'>On Sale</Link>
                        <Link className='hover:text-[#88C90D]'>Out of Stock</Link>
                        <Link className='hover:text-[#88C90D]'>External Product</Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold text-white'>Contact Us</h1>
                    <hr className='w-10' />
                    <div className='text-white flex flex-col mt-4 gap-2'>
                        <div className='flex gap-3'>
                            <svg className='hover:bg-[#88C90D] rounded-full p-2 bg-[#87c90d00]' version={1.0} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40px" height="35px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z" /> </g></svg>
                            <h1>256 Lonely Street Ave, Brooklyn CA, United State</h1>
                        </div>
                        <div className='flex gap-3'>
                            <svg className='hover:bg-[#88C90D] rounded-full p-2 bg-[#87c90d00]' fill="#ffffff" width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="M22,3H2A1,1,0,0,0,1,4V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V4A1,1,0,0,0,22,3ZM21,19H3V9.477l8.628,3.452a1.01,1.01,0,0,0,.744,0L21,9.477ZM21,7.323l-9,3.6-9-3.6V5H21Z" /></g></svg>
                            <h1>info@robohouse.com</h1>
                        </div>
                        <div className='flex gap-3'>
                            <svg className='hover:bg-[#88C90D] rounded-full p-2 bg-[#87c90d00]' width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="M9 16C2.814 9.813 3.11 5.134 5.94 3.012l.627-.467a1.483 1.483 0 0 1 2.1.353l1.579 2.272a1.5 1.5 0 0 1-.25 1.99L8.476 8.474c-.38.329-.566.828-.395 1.301.316.88 1.083 2.433 2.897 4.246 1.814 1.814 3.366 2.581 4.246 2.898.474.17.973-.015 1.302-.396l1.314-1.518a1.5 1.5 0 0 1 1.99-.25l2.276 1.58a1.48 1.48 0 0 1 .354 2.096l-.47.633C19.869 21.892 15.188 22.187 9 16z" fill="#ffffff" /></g></svg>
                            <h1>+256 (3156) 2156 236</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#232323] py-5'>
                <h1 className='text-center text-white'>Ⓒ Copyright 2023 Knirpse. All Rights Reserved by Nayem</h1>
            </div>
        </div>
    );
};

export default Footer;