import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-[#1f3040] text-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          START FRAMEWORK
        </Link>
        <div className="flex space-x-4">
          <Link 
            to="/about" 
            className={`px-3 py-2 rounded ${location.pathname === '/about' ? 'bg-[#1abc9c] text-white' : 'text-white'}`}
          >
            ABOUT
          </Link>
          <Link 
            to="/portfolio" 
            className={`px-3 py-2 rounded ${location.pathname === '/portfolio' ? 'bg-[#1abc9c] text-white' : 'text-white'}`}
          >
            PORTFOLIO
          </Link>
          <Link 
            to="/contact" 
            className={`px-3 py-2 rounded ${location.pathname === '/contact' ? 'bg-[#1abc9c] text-white' : 'text-white'}`}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

