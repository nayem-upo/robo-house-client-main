import React, { useContext } from 'react';
import { AuthContext } from './Components/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from './Components/useTitle';

const UpdateToy = () => {
    useTitle("Update Toy")
    const { user } = useContext(AuthContext);
    const toys = useLoaderData();
    const { name, _id, description, price, quantity } = toys;

    const handleUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const description = form.description.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const updatedToy = {
            description,
            price,
            quantity
        }
        console.log(price.length);

        if (price.length < 1) {
            Swal.fire({
                title: 'Oops...!',
                text: 'Please fill all field',
                icon: 'error',
                confirmButtonText: 'Closs'
            })
            return;
        }

        if (name.length < 1, description.length < 1, price < 1, quantity.length < 1) {

            Swal.fire({
                title: 'Oops...!',
                text: 'Please fill all field',
                icon: 'error',
                confirmButtonText: 'Closs'
            })
            return;
        }

        if (name.length > 0 && description.length > 0 && price.length > 0 && quantity.length > 0) {
            fetch(`https://robo-house-server.vercel.app/toy/${_id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedToy)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Toy Updated successfully',
                            icon: 'success',
                            confirmButtonText: 'Closs'
                        })
                    }
                })

        }
    }
    return (
        <div>
            <div className='bg-[#9C29B2] text-white my-10 w-[350px] text-3xl text-center mx-auto rounded-xl p-3 md:w-[600px] font-semibold'>Update a toy - Robo House</div>
            <div className='w-[80%] mx-auto my-3'>
                <Link to="/mytoys"><h1 className="flex gap-2 items-center hover:underline"><svg width="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="arrow-left"> <g> <polyline data-name="Right" fill="none" id="Right-2" points="7.6 7 2.5 12 7.6 17" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> <line fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21.5" x2="4.8" y1="12" y2="12"></line> </g> </g> </g> </g></svg> Back to My Toys</h1></Link>
            </div>
            <div className='md:w-[80%] w-[92%] rounded mb-10 mx-auto text-center bg-[#9b29b215] md:p-10 py-5'>
                <h1 className="text-4xl text-[#88C90D] font-bold">Update Toy</h1>
                <h1 className="py-2">Use the below form to update a toy</h1>
                <form onSubmit={handleUpdateToy} className="w-[80%] mx-auto">
                    <div className="relative mb-4 text-left">
                        <label htmlFor="name" className="text-lg leading-7 font-semibold text-gray-600">Name</label>
                        <input defaultValue={`${name} (can't be changed)`} disabled placeholder="RoboBuddy" type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4 text-left">
                        <label htmlFor="description" className="text-lg leading-7 font-semibold text-gray-600">Description</label>
                        <input defaultValue={description} placeholder="Product Description" type="text" id="description" name="description" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4 text-left flex justify-between gap-4">
                        <div className="w-full">
                            <label htmlFor="price" className="text-lg leading-7 font-semibold text-gray-600">Price</label>
                            <input defaultValue={price} placeholder="Product Price" type="text" id="price" name="price" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="quantity" className="text-lg leading-7 font-semibold text-gray-600">Available quantity</label>
                            <input defaultValue={quantity} placeholder="Enter quantity" type="text" id="quantity" name="quantity" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <input className={`bg-[#9C29B2] hover:bg-[#88C90D] duration-300 cursor-pointer text-white my-2 text-xl text-center mx-auto rounded-md p-2 w-full font-semibold`} type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;