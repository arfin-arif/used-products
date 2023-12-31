import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { BsPerson } from 'react-icons/bs';

const DashBoardLayout = () => {


    const user = JSON.parse(localStorage.getItem('user'));
    return (



        <div>
            {/* <Navbar /> */}
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content overflow-hidden">

                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu  bg-base-100 text-base-content" >
                        {/* content of  */}
                        <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-slate-50 border-r rtl:border-r-0 rtl:border-l  ">


                            <div className="flex flex-col justify-between flex-1 mt-6">
                                <nav className="flex-1 -mx-3 space-y-3 ">
                                    <div className="relative mx-3">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>

                                        <input type="text" className="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md   focus:border-blue-400  focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
                                    </div>
         

                                    <Link to='/dashboard/users' className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100   hover:text-gray-700" href="#">
                                     <BsPerson></BsPerson>
                                        <span className="mx-2 text-sm font-medium">Users</span>
                                    </Link>

                                    {/* <Link to='/dashboard' className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100   hover:text-gray-700" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                                        </svg>

                                        <span className="mx-2 text-sm font-medium">Schedule </span>
                                    </Link>


                                    <Link to='/dashboard/' className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100   hover:text-gray-700" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                        </svg>

                                        <span className="mx-2 text-sm font-medium">My Company</span>
                                    </Link>

                                    <Link to='/course-registration' className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100   hover:text-gray-500" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>

                                        <span className="mx-2 text-sm font-medium">Settings</span>
                                    </Link> */}


                                </nav>

                                <div className="">
                                    <div className="flex items-center justify-between ">
                                        <Link to='' className="flex items-center gap-x-2">
                                            <img className="object-cover rounded-full h-7 w-7" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80" alt="avatar" />
                                            <span className="text-sm font-medium text-gray-700 ">{user.name.firstName} </span>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </aside>

                    </ul>
                </div>
            </div >

        </div>
    );
};

export default DashBoardLayout;