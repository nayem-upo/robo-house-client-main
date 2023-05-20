import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className="flex mx-20 my-10 items-center shadow-2xl justify-center">
                <img
                    className="w-1/2 "
                    src="https://i.ibb.co/M5Lvgyh/Ramadan-Special-Sale-Instagram-Post.png"
                    alt=""
                />
                <div
                    className="bg-left-bottom bg-no-repeat py-20 pe-6 text-center " >
                    <h1 className="text-4xl font-bold text-[#9C29B2]">OOPS! PAGE NOT BE FOUND</h1>
                    <p className="text-xl my-5 mb-8">
                        Sorry but the page you are looking for does not exist or temporarily unavailable!
                    </p>
                    <Link
                        to="/"
                        className="border-2 duration-500 rounded-2xl w-40 p-2 mx-auto text-[#9C29B2] shadow-lg hover:text-white hover:bg-[#60AA2D] text-lg font-semibold border-[#9C29B2]"
                    >
                        Go back to home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;