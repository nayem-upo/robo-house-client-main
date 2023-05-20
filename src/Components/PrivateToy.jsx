import React from 'react';
import { Link } from 'react-router-dom';

const PrivateToy = ({ toy, handleDelete }) => {
    const { _id, image, name, seller, category, price, quantity } = toy;
    return (
        <tr>
            <td><img className="border-b-2 object-cover h-20 border-gray-200 w-24 p-2 rounded-2xl" src={image} alt="" /></td>
            <td className="border-b-2 border-gray-200 px-4 py-3 w-40">{name}</td>
            <td className="border-b-2 border-gray-200 px-4 py-3">{seller}</td>
            <td className="border-b-2 border-gray-200 px-4 py-3">{category}</td>
            <td className="border-b-2 border-gray-200 px-4 py-3">$ {price}</td>
            <td className="border-b-2 border-gray-200 px-4 py-3">{quantity}</td>
            <td className="border-b-2 border-gray-200 text-center w-28">
                <div className="flex justify-evenly me-3 gap-1">
                    <Link to={`/details/${_id}`}><svg className="cursor-pointer bg-[#9C29B2] hover:bg-[#88C90D] duration-300 rounded-md p-1" width="35px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z" fill="#000000" /> <path fillRule="evenodd" clipRule="evenodd" d="M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z" fill="#000000" /> </g></svg></Link>
                    <Link to={`/update/${_id}`}><svg className="cursor-pointer bg-[#9C29B2] hover:bg-[#88C90D] duration-300 rounded-md p-2" width="36px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fillRule="evenodd" d="M15.198 3.52a1.612 1.612 0 012.223 2.336L6.346 16.421l-2.854.375 1.17-3.272L15.197 3.521zm3.725-1.322a3.612 3.612 0 00-5.102-.128L3.11 12.238a1 1 0 00-.253.388l-1.8 5.037a1 1 0 001.072 1.328l4.8-.63a1 1 0 00.56-.267L18.8 7.304a3.612 3.612 0 00.122-5.106zM12 17a1 1 0 100 2h6a1 1 0 100-2h-6z"></path> </g></svg></Link>
                    <svg onClick={() => handleDelete(_id)} className="cursor-pointer bg-[#9C29B2] hover:bg-[#88C90D] duration-300 rounded-md" width="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8L8 16M8.00001 8L16 16" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </div>
            </td>
        </tr>
    );
};

export default PrivateToy;