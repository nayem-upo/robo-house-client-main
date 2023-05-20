import React from 'react';
import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {
    const { _id, image, name, seller, category, price, quantity } = toy;
    return (
        <tr>
            <td><img className="border-b-2 object-cover h-20 border-gray-200 w-24 p-2 rounded-2xl" src={image} alt="" /></td>
            <td className="border-b-2 border-gray-200 px-4 py-3">{name}</td>
            <td className="border-b-2 border-gray-200 px-4 py-3">{seller}</td>
            <td className="border-b-2 border-gray-200 px-4 py-3">{category}</td>
            <td className="border-b-2 border-gray-200 px-4 py-3">$ {price}</td>
            <td className="border-b-2 border-gray-200 px-4 py-3">{quantity}</td>
            <td className="border-b-2 border-gray-200 text-center w-28">
                <div className="flex justify-evenly">
                    <Link to={`/details/${_id}`}><button className='me-10 border-2 p-1 hover:text-white duration-500 hover:bg-[#74b300] rounded-2xl w-28  my-4 mx-auto border-[#9C29B2]'>View Details</button></Link>
                </div>
            </td>
        </tr>
    );
};

export default Toy;