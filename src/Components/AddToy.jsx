import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthProvider';
import useTitle from './useTitle';

const AddToy = () => {
    useTitle("Add Toy")
    const { user } = useContext(AuthContext);

    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const description = form.description.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const newToy = {
            name,
            image,
            description,
            seller,
            email,
            category,
            price,
            quantity,
            rating
        }

        if (name.length < 1, image.length < 1, description.length < 1, seller.length < 1, email.length < 1, price.length < 1, quantity.length < 1, rating.length < 1) {

            Swal.fire({
                title: 'Oops...!',
                text: 'Please fill all field',
                icon: 'error',
                confirmButtonText: 'Closs'
            })
        }

        if (parseInt(rating) !== 0 && parseInt(rating) !== 1 && parseInt(rating) !== 2 && parseInt(rating) !== 3 && parseInt(rating) !== 4 && parseInt(rating) !== 5) {
            Swal.fire({
                title: 'Oops...!',
                text: 'Rating only allowed 0 - 5',
                icon: 'error',
                confirmButtonText: 'Closs'
            })
            return;
        }


        if (name.length > 0 && image.length > 0 && description.length > 0 && category.length > 0 && seller.length > 0 && email.length > 0 && price.length > 0 && quantity.length > 0 && rating.length) {

            fetch('http://localhost:5000/toy', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newToy)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        form.reset()
                        Swal.fire({
                            title: 'Success!',
                            text: 'Toy added successfully',
                            icon: 'success',
                            confirmButtonText: 'Closs'
                        })
                    }
                })

        }
    }

    return (
        <div className="">
            <div className='bg-[#9C29B2] text-white my-10 w-[320px] text-3xl text-center mx-auto rounded-xl p-3 md:w-[600px] font-semibold'>Add a toy - Robo House</div>
            <div className='w-[80%] mx-auto my-3'>
                <Link to="/mytoys"><h1 className="flex gap-2 items-center hover:underline"><svg width="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="arrow-left"> <g> <polyline data-name="Right" fill="none" id="Right-2" points="7.6 7 2.5 12 7.6 17" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> <line fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21.5" x2="4.8" y1="12" y2="12"></line> </g> </g> </g> </g></svg> Back to My Toys</h1></Link>
            </div>
            <div className='md:w-[80%] w-[92%] rounded mb-10 mx-auto text-center bg-[#9b29b215] md:p-10 py-5'>
                <h1 className="text-4xl text-[#88C90D] font-bold">New Toy</h1>
                <h1 className="py-2">Use the below form to create a new product</h1>
                <form onSubmit={handleAddToy} className="w-[80%] mx-auto">
                    <div className="relative mb-4 text-left">
                        <label htmlFor="name" className="text-lg leading-7 font-semibold text-gray-600">Name</label>
                        <input placeholder="RoboBuddy" type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4 text-left">
                        <label htmlFor="description" className="text-lg leading-7 font-semibold text-gray-600">Description</label>
                        <input placeholder="Product Description" type="text" id="description" name="description" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4 text-left flex justify-between gap-4">
                        <div className="w-full">
                            <label htmlFor="image" className="text-lg leading-7 font-semibold text-gray-600">Image URL</label>
                            <input placeholder="Image URL" type="text" id="image" name="image" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="relative mb-4 text-left flex justify-between gap-4">
                        <div className="w-full">
                            <label htmlFor="seller" className="text-lg leading-7 font-semibold text-gray-600">Seller Name</label>
                            <input defaultValue={user.displayName} placeholder="Enter Your Name" type="text" id="seller" name="seller" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="text-lg leading-7 font-semibold text-gray-600">Seller Email</label>
                            <input defaultValue={user.email} placeholder="Enter Your Email" type="text" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="relative mb-4 text-left flex justify-between gap-4">
                        <div className="w-full">
                            <label htmlFor="category" className="text-lg leading-7 font-semibold text-gray-600">Sub-Category</label>
                            <select name="category" className="text-[#a7a0a6]  h-11 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" >
                                <option>Entertainment Robots</option>
                                <option>Remote Control Robots</option>
                                <option>Educational Robots</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label htmlFor="price" className="text-lg leading-7 font-semibold text-gray-600">Price</label>
                            <input placeholder="Product Price" type="text" id="price" name="price" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="relative mb-4 text-left flex justify-between gap-4">
                        <div className="w-full">
                            <label htmlFor="quantity" className="text-lg leading-7 font-semibold text-gray-600">Available quantity</label>
                            <input placeholder="Enter quantity" type="text" id="quantity" name="quantity" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="rating" className="text-lg leading-7 font-semibold text-gray-600">Rating</label>
                            <input placeholder="0 - 5 number allowed" type="text" id="rating" name="rating" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <input className={`bg-[#9C29B2] hover:bg-[#88C90D] duration-300 cursor-pointer text-white my-2 text-xl text-center mx-auto rounded-md p-2 w-full font-semibold`} type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddToy;