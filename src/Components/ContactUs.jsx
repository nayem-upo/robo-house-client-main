import React from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {

    const handleFeedback = (event) => {
        event.preventDefault();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Done! Thanks for your feedback',
            showConfirmButton: false,
            timer: 1600
        })
        event.target.reset()
    }
    return (
        <div>
            <section className="body-font relative w-[90%] mx-auto">
                <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameBorder={0}
                            title="map"
                            marginHeight={0}
                            marginWidth={0}
                            scrolling="no"
                            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.7)" }}
                        />
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                    ADDRESS
                                </h2>
                                <p className="mt-1">
                                    256 Lonely Street Ave, Brooklyn CA, United State
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                    EMAIL
                                </h2>
                                <a className="text-indigo-500 leading-relaxed">info@robohouse.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed">+256 (3156) 2156 236</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleFeedback} className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-[#9C29B2] text-2xl mb-1 font-medium title-font">
                            Feedback
                        </h2>
                        <p className="leading-relaxed mb-5 text-gray-600">
                            Give your opinion and suggestion.
                        </p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                required
                                id="name"
                                name="name"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                Email
                            </label>
                            <input
                                required
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                Message
                            </label>
                            <textarea
                                required
                                id="message"
                                name="message"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                defaultValue={""}
                            />
                        </div>
                        <button className="text-white bg-[#9C29B2] py-2 px-6 focus:outline-none rounded text-lg border-2 p-1 hover:text-white duration-500 hover:bg-[#74b300] border-[#88C90D]">
                            Send
                        </button>
                        <p className="text-xs text-gray-500 mt-3">
                            Safety is our utmost priority, and all our toy robots undergo rigorous testing to meet the highest industry standards.
                        </p>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default ContactUs;