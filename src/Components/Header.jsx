import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const displayName = user?.displayName;
    const email = user?.email;
    const photoURL = user?.photoURL;
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                            <li><NavLink className={({ isActive }) => isActive ? "text-[#9C29B2]" : "hover:text-[#88C90D] duration-300"} to="/">Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "text-[#9C29B2]" : "hover:text-[#88C90D] duration-300"} to="/alltoys">All Toys</NavLink></li>
                            {user && <li><NavLink className={({ isActive }) => isActive ? "text-[#9C29B2]" : "hover:text-[#88C90D] duration-300"} to="/mytoys">My Toys</NavLink></li>}
                            {user && <li><NavLink className={({ isActive }) => isActive ? "text-[#9C29B2]" : "hover:text-[#88C90D] duration-300"} to="/add">Add A Toy</NavLink></li>}
                            <li><NavLink className={({ isActive }) => isActive ? "text-[#9C29B2]" : "hover:text-[#88C90D] duration-300"} to="/blogs">Blogs</NavLink></li>
                        </ul>
                    </div>
                    <div className='flex items-center btn btn-ghost normal-case text-xl'>
                        <img className='w-12' src="https://i.ibb.co/dP9qynR/robot-press-tineye-15.png" alt="" />
                        <NavLink className="text-3xl"><span className='text-[#9C29B2]'>Robo</span> <span className='text-[#88C90D] duration-300'>House</span></NavLink>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="gap-10 menu-horizontal px-1 text-xl font-semibold">
                        <li className='hover:text-[#88C90D] duration-300'><NavLink className={({ isActive }) => isActive ? "text-[#9C29B2]" : "hover:text-[#88C90D] duration-300"} to="/">Home</NavLink></li>
                        <li className='hover:text-[#88C90D] duration-300'><NavLink className={({ isActive }) => isActive ? "text-[#9C29B2]" : "hover:text-[#88C90D] duration-300"} to="/alltoys">All Toys</NavLink></li>
                        {user && <li className='hover:text-[#88C90D] duration-300'><NavLink className={({ isActive }) => isActive ? "text-[#9C29B2]" : "hover:text-[#88C90D] duration-300"} to="/mytoys">My Toys</NavLink></li>}
                        {user && <li className='hover:text-[#88C90D] duration-300'><NavLink className={({ isActive }) => isActive ? "text-[#9C29B2]" : "hover:text-[#88C90D] duration-300"} to="/add">Add A Toy</NavLink></li>}
                        <li className='hover:text-[#88C90D] duration-300'><NavLink className={({ isActive }) => isActive ? "text-[#9C29B2]" : "hover:text-[#88C90D] duration-300"} to="/blogs">Blogs</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-end dropdown-hover">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            photoURL ? <img src={photoURL} /> : <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g id="User / User_Circle"> <path id="Vector" d="M17.2166 19.3323C15.9349 17.9008 14.0727 17 12 17C9.92734 17 8.06492 17.9008 6.7832 19.3323M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g> </g></svg>
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-0 p-2 shadow rounded-box w-52 bg-white">

                                    <li><a>{displayName}</a></li>
                                    <li onClick={userLogOut}><a className='text-red-600'>Logout</a></li>
                                </ul>
                            </div>
                            :
                            <Link to="/login"><button className='md:me-10 border-2 p-1 hover:text-white hover:bg-[#74b300] rounded-2xl w-20 mx-auto border-[#88C90D] duration-300'>Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;