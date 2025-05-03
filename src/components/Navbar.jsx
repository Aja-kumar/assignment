import React, { useState } from 'react';
import { useAppContext } from '../Context';
import { FaShoppingCart, FaBars, FaTimes, FaHome, FaList, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const { cart } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-purple-600 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">ShopEasy</div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-purple-200 cursor-pointer flex items-center">
            <FaHome className="mr-1" /> Home
          </li>
          <li className="hover:text-purple-200 cursor-pointer flex items-center">
            <FaList className="mr-1" /> Categories
          </li>
          <li className="hover:text-purple-200 cursor-pointer flex items-center">
            <FaShoppingCart className="mr-1" /> Cart ({cart.length})
          </li>
          <li className="hover:text-purple-200 cursor-pointer flex items-center">
            <FaUser className="mr-1" /> Profile
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple-700 mt-2 py-2 rounded-lg">
          <ul className="flex flex-col space-y-3 px-4">
            <li className="hover:text-purple-200 cursor-pointer flex items-center py-2">
              <FaHome className="mr-2" /> Home
            </li>
            <li className="hover:text-purple-200 cursor-pointer flex items-center py-2">
              <FaList className="mr-2" /> Categories
            </li>
            <li className="hover:text-purple-200 cursor-pointer flex items-center py-2">
              <FaShoppingCart className="mr-2" /> Cart ({cart.length})
            </li>
            <li className="hover:text-purple-200 cursor-pointer flex items-center py-2">
              <FaUser className="mr-2" /> Profile
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;