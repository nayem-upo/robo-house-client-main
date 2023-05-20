import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { loginUser, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setError("")
                setSuccess("Login Successfull")
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setSuccess("")
                setError(errorMessage)
            });
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                setError("")
                setSuccess("Login Successfull")
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                setSuccess("")
                setError(errorMessage)
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    return (
        <div>
            <div className='flex justify-between w-[900px] border mx-auto my-10 rounded-xl'>
                <div className='md:w-[300px] justify-center flex flex-col mx-auto py-10'>
                    <div className='my-4 text-center'>
                        <h1 className='text-3xl font-semibold text-[#88C90D]'>Sign in to Account</h1>
                        <hr className="border-2 w-14 mx-auto border-[#88C90D] cursor-pointer hover:border-red-500 duration-500" />
                    </div>

                    <form onSubmit={handleLogin} className='flex flex-col gap-3'>
                        <input className='bg-[#F3F4F6] h-10 w-[300px] ps-3 outline-none' placeholder='Email' type="email" name="email" id="email" required />
                        <input className='bg-[#F3F4F6] h-10 w-[300px] ps-3 outline-none' placeholder='Password' type="password" name="password" id="password" required />
                        <div className='flex justify-between'>
                            <span className='flex items-center gap-2'><label
                                className="relative flex cursor-pointer items-center rounded-full"
                                htmlFor="checkbox"
                                data-ripple-dark="true"
                            >
                                <input
                                    type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#60AA2D] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#60AA2D] checked:bg-[#60AA2D] checked:before:bg-[#60AA2D] hover:before:opacity-10"
                                    id="checkbox"
                                />
                                <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                            </label>Remember me</span>
                            <span className='text-[#74b300] underline'>Forget Password?</span>
                        </div>
                        <input className='text-white cursor-pointer hover:bg-[#74b300] font-semibold bg-[#88C90D] py-1' type="submit" value="Sign In" />
                        {error &&
                            <p className='text-red-600'>{error}</p>
                        }
                        {success &&
                            <p className='text-green-500'>{success}</p>
                        }
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogin} className='border-2 p-1 hover:text-white hover:bg-[#74b300] duration-300 rounded-2xl w-1/2 mx-auto border-[#88C90D]'>Sign in with Google</button>
                </div>
                <div className='text-center bg-[#88C90D] rounded-r-xl md:w-[320px] md:py-20'>
                    <div className='text-center'>
                        <h1 className='text-3xl font-semibold text-[#ffffff] py-2'>Hello, User !</h1>
                        <hr className="border-2 w-14 mx-auto border-[#ffffff] cursor-pointer hover:border-red-500 duration-500" />
                    </div>
                    <p className='mx-auto md:w-[200px] text-white my-9'><span className='text-xl font-semibold'>New on this site? </span><br /> Fill up personal infomation and start journey with us.</p>
                    <Link to="/register" className='text-[#9C29B2] border-2 p-1 hover:text-white hover:bg-[#74b300] rounded-2xl px-9 py-2 border-[#ffffff] duration-300'>Sign Up</Link>
                </div>

            </div>
        </div>
    );
};

export default Login;