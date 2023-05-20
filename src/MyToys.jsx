import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Components/AuthProvider';
import PrivateToy from './Components/PrivateToy';
import Swal from 'sweetalert2';
import useTitle from './Components/useTitle';

const MyToys = () => {
    useTitle("My Toys")
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [filter, setFilter] = useState(1)

    useEffect(() => {
        fetch(`http://localhost:5000/filterdToy?search=${user.email}&filter=${filter}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user.email, filter])

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/toy/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Toy has been deleted.',
                                    'success'
                                )
                                const remaining = toys.filter(chocolate => chocolate._id !== id)
                                setToys(remaining)
                            }
                        })
                }
            }))
    }

    return (
        <div className="mb-20">
            <div className='bg-[#9C29B2] text-white my-10 w-[350px] text-3xl text-center mx-auto rounded-xl p-3 md:w-[600px] font-semibold'>All Toys - Robo House</div>
            <div className="w-[80%] mx-auto">
                <div className='flex justify-between'>
                    <div>
                        <Link to="/add" className="border mb-3 p-3 px-7 w-36 text-center rounded-lg">+ Add New Toy</Link>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn m-1 bg-[#9C29B2] text-white border-0">Filter by price</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-52">
                            <li onClick={() => setFilter(1)}><a>Lowest</a></li>
                            <li onClick={() => setFilter(-1)}><a>Highest</a></li>
                        </ul>
                    </div>
                </div>
                <div className='mt-10'>
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
                                            toys.map(toy => <PrivateToy handleDelete={handleDelete} key={toy._id} toy={toy}></PrivateToy>)
                                        }
                                    </tbody>
                                </table>
                                {
                                    toys.length < 1 && <div className='text-center mt-7 text-2xl'>You have not added any toy. Please <Link className='underline text-[#9C29B2]' to="/add">Add A Toy</Link></div>
                                }
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MyToys;