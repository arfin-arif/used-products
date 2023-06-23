import { useState, useEffect } from 'react';
import { BsPersonExclamation, BsBorderWidth, BsBorderAll, BsHouse } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if token exists in local storage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {
    // Clear token from local storage
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const navItems = [
    { label: 'Home', icon: <BsHouse />, link: '/' },
    { label: 'Dashboard', icon: <BsBorderAll />, link: '/dashboard' },
    { label: 'Login', icon: <BsBorderWidth />, link: '/login' },
  ];

  return (
    <>
      <div className="md:flex-shrink-0 w-full">
        <div className="bg-white shadow w-full">
          <div className='container flex items-center justify-between'>
            <div className='w-[300px] relative  py-4 lg:pl-14'>
              <Link to='/'><h1 className='text-5xl font-semibold  text-red-500 text'>Rockso</h1></Link>
            </div>

            <div className="mr-2">
              <nav className="flex gap-4 items-center justify-center flex-1">
                {navItems.map((item) => (
                  (item.label === 'Login' && isLoggedIn) ? null : (
                    <Link
                      key={item.label}
                      to={item.link}
                      className={`${item.label === activeTab
                        ? 'bg-primary/20 text-primary'
                        : 'text-gray-700 hover:bg-primary/20 hover:text-primary'
                        } group flex gap-2 items-center px-4 py-2 h-full text-md text-start font-[600] rounded-md transition-all duration-300`}
                      onClick={() => handleTabClick(item.label)}
                    >
                      <span> {[item.icon]} </span>
                      <span>{item.label}</span>
                    </Link>
                  )
                ))}
                {isLoggedIn && (
                  <button
                    className="group flex gap-2 items-center px-4 py-2 h-full text-md text-start font-[600] rounded-md transition-all duration-300 text-gray-700 hover:bg-primary/20 hover:text-primary"
                    onClick={handleLogout}
                  >
                    <span><BsPersonExclamation /></span>
                    <span>Logout</span>
                  </button>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
