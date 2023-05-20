import React, { useContext, useEffect, useState } from 'react';
import Toy from './Toy';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const AllToys = () => {

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [limit, setLimit] = useState(20);
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetch(`http://localhost:5000/toy?limit=${limit}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user, limit])


    const handleSearch = () => {
        if (searchText < 1) {
            fetch(`http://localhost:5000/toy?limit=${limit}`)
                .then(res => res.json())
                .then(data => setToys(data))
            return;
        }
        fetch(`http://localhost:5000/toySearch/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }

    return (
        <div className="mb-20">
            <div className='bg-[#9C29B2] text-white my-10 text-3xl text-center mx-auto rounded-xl p-3 w-[600px] font-semibold'>All Toys - Robo House</div>
            <div className="w-[80%] mx-auto">
                <div className='flex justify-between'>
                    <div>
                        <Link to="/add" className="border mb-3 p-3 px-7 w-36 text-center rounded-lg">+ Add New Toy</Link>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn m-1 bg-[#9C29B2] text-white border-0">Result : {limit}</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-52">
                            <li onClick={() => setLimit(20)}><a>20</a></li>
                            <li onClick={() => setLimit(100)}><a>100</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    {/* search input */}
                    <div className="max-w-md mx-auto my-5">
                        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-xl bg-white overflow-hidden">
                            <div className="grid place-items-center h-full w-12 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input onChange={(e) => setSearchText(e.target.value)} className="peer text-[#9C29B2] font-semibold text-md bg-white h-full w-full outline-none pr-2" type="text" id="search" placeholder="Search your toys..." />
                            <button onClick={handleSearch} className='my-auto bg-[#88C90D] px-3 py-3 rounded-e-lg hover:text-white hover:bg-[#9C29B2] duration-300'>Search</button>
                        </div>
                    </div>


                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto">

                            <div className="w-full mx-auto overflow-auto">
                                <table className="table-auto w-full text-left whitespace-no-wrap">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-3 title-font tracking-wider font-semibold text-[#9C29B2] text-sm bg-gray-100 rounded-tl rounded-bl">Image</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-semibold text-[#9C29B2] text-sm bg-gray-100">Toy Name</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-semibold text-[#9C29B2] text-sm bg-gray-100">Seller Name</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-semibold text-[#9C29B2] text-sm bg-gray-100">Sub-category</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-semibold text-[#9C29B2] text-sm bg-gray-100">Price</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-semibold text-[#9C29B2] text-sm bg-gray-100">Available Quantity</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-semibold text-[#9C29B2] text-sm bg-gray-100">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            toys.map(toy => <Toy key={toy._id} toy={toy}></Toy>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AllToys;