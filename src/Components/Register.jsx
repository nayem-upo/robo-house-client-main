import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { GoogleAuthProvider, updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser, auth, googleLogin } = useContext(AuthContext)
    const [disable, setDisable] = useState(true)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleCreateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);
        createUser(email, password)
            .then((userCredential) => {
                setError("")
                setSuccess("Register Successfull")
                navigate(from, { replace: true });
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => {
                }).catch((error) => {
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setSuccess("")
                setError(errorMessage)
                console.log(errorMessage);
            });
    }

    const handleGoogleRegister = () => {
        googleLogin()
            .then((result) => {
                navigate(from, { replace: true });
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                setError("")
                setSuccess("Register Successfull")
                const user = result.user;
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setSuccess("")
                setError(errorMessage)
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    return (
        <div>
            <div className='flex justify-between w-[900px] border mx-auto my-10 rounded-xl'>
                <div className='md:w-[300px] justify-center flex flex-col mx-auto py-4'>
                    <div className='my-4 text-center'>
                        <h1 className='text-3xl font-semibold text-[#88C90D]'>Sign up to Account</h1>
                        <hr className="border-2 w-14 mx-auto border-[#88C90D] cursor-pointer hover:border-red-500 duration-500" />
                    </div>

                    <form onSubmit={handleCreateUser} className='flex flex-col gap-3'>
                        <input className='bg-[#F3F4F6] h-10 w-[300px] ps-3 outline-none' placeholder='Name' type="name" name="name" id="name" required />
                        <input className='bg-[#F3F4F6] h-10 w-[300px] ps-3 outline-none' placeholder='Email' type="email" name="email" id="email" required />
                        <input className='bg-[#F3F4F6] h-10 w-[300px] ps-3 outline-none' placeholder='Password' type="password" name="password" id="password" required />
                        <input className='bg-[#F3F4F6] h-10 w-[300px] ps-3 outline-none' placeholder='Photo URL' type="photo" name="photo" id="photo" />
                        <div className='flex justify-between'>
                            <span className='flex items-center gap-2'><label
                                className="relative flex cursor-pointer items-center rounded-full"
                                htmlFor="checkbox"
                                data-ripple-dark="true"
                            >
                                <input
                                    type="checkbox"
                                    onClick={() => setDisable(!disable)}
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#88C90D] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#88C90D] checked:bg-[#88C90D] checked:before:bg-[#88C90D] hover:before:opacity-10"
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
                            </label>I agree the <span className='text-[#74b300]'>Terms and Conditions</span></span>
                        </div>
                        <input disabled={disable} className='py-2 text-white cursor-pointer hover:bg-[#74b300] font-semibold bg-[#88C90D] block w-full select-none rounded-lgpx-6 text-center align-middle font-sans text-xs uppercase shadow-md shadow-[#60AA2D]/20 transition-all hover:shadow-lg hover:shadow-[#60AA2D]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' type="submit" value="Sign Up" />
                        {error &&
                            <p className='text-red-600'>{error}</p>
                        }
                        {success &&
                            <p className='text-green-500'>{success}</p>
                        }
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleRegister} className='border-2 p-1 hover:text-white hover:bg-[#74b300] rounded-2xl w-1/2 mx-auto border-[#88C90D] duration-300'>Sign up with Google</button>
                </div>
                <div className='text-center bg-[#88C90D] rounded-r-xl md:w-[320px] md:py-20'>
                    <div className='text-center'>
                        <h1 className='text-3xl font-semibold text-[#ffffff] py-2'>Hello, User !</h1>
                        <hr className="border-2 w-14 mx-auto border-[#ffffff] cursor-pointer hover:border-red-500 duration-500" />
                    </div>
                    <p className='mx-auto md:w-[200px] text-white my-9'><span className='text-xl font-semibold'>Already have account? </span><br /> Fill up your login infomation.</p>
                    <Link to="/login" className='border-2 p-1 hover:text-white hover:bg-[#74b300] rounded-2xl px-9 py-2 border-[#ffffff] duration-300'>Sign In</Link>
                </div>

            </div>
        </div>
    );
};

export default Register;