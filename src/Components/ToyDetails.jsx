import React from 'react';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';
import ReactStars from 'react-stars';
import useTitle from './useTitle';

const ToyDetails = () => {
    useTitle("Details")
    const toys = useLoaderData();
    const { name, _id, description, price, quantity, image, seller, rating, email, category } = toys;
    const firstExample = {
        size: 25,
        value: parseInt(rating),
        edit: false,
    };
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={image} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:mt-0">
                            <h2 className="text-lg title-font text-gray-500 tracking-widest">Category: {category}</h2>
                            <h1 className="text-[#9C29B2] font-semibold text-4xl title-font mb-1">{name}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <ReactStars {...firstExample} />
                                    <span className="text-gray-600 ml-3">Reting</span>
                                </span>
                            </div>
                            <p className="leading-relaxed text-lg">{description}</p>
                            <div className="flex mt-6 pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex w-1/3">
                                    <span className="mr-3">Quantity : {quantity}</span>
                                </div>
                                <div className="divider m-0 divider-horizontal"></div>
                                <div className="ml-6 items-center">
                                    <span className="mr-3 text-[#88C90D]">Seller info:</span>
                                    <div>
                                        <h1>Name: {seller}</h1>
                                        <h1>Email: {email}</h1>
                                    </div>

                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font text-2xl text-[#9C29B2] font-semibold">Price: ${price}</span>
                                <div className='mx-auto my-1'>
                                    <Link to="/alltoys"><h1 className="flex gap-2 items-center hover:underline"><svg width="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="arrow-left"> <g> <polyline data-name="Right" fill="none" id="Right-2" points="7.6 7 2.5 12 7.6 17" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> <line fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21.5" x2="4.8" y1="12" y2="12"></line> </g> </g> </g> </g></svg> Back to All Toys</h1></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ToyDetails;