import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (

        <div>
            <footer className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-12 mx-auto">
                    <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div>
                            <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <Link to='' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</Link>
                                <Link to='' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Who We Are</Link>
                                <Link to='' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Philosophy</Link>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-800 dark:text-white">Industries</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <Link to='' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Retail & E-Commerce</Link>
                                <Link to='' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Information Technology</Link>
                                <Link to='' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Finance & Insurance</Link>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-800 dark:text-white">Services</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <Link to='' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Translation</Link>
                                <Link to='' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Proofreading & Editing</Link>
                                <Link to='' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Content Creation</Link>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold text-gray-800 dark:text-white">Contact Us</p>

                            <div className="flex flex-col items-start mt-5 space-y-2">
                                <Link to='' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">0 768 473 4978</Link>
                                <Link to='' className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">info@example.com</Link>
                            </div>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                    <div className="flex flex-col items-center justify-between sm:flex-row">
                        <Link to=''>
                            {/* <img className="w-auto h-7" src={logo} alt="" /> */}
                        </Link>
                        <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">© Copyright 2023. All Rights Reserved.</p>
                    </div>

                </div>

            </footer>
        </div>
    );
};

export default Footer;