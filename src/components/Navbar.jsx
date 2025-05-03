import React from 'react';
import { useAppContext } from '../Context';

const Navbar = () => {
  const { cart } = useAppContext();

  return (
    <nav className="bg-purple-600 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">ShopEasy</div>
        <ul className="flex space-x-6">
          <li className="hover:text-purple-200 cursor-pointer">Home</li>
          <li className="hover:text-purple-200 cursor-pointer">Categories</li>
          <li className="hover:text-purple-200 cursor-pointer flex items-center">
            Cart ({cart.length})
          </li>
          <li className="hover:text-purple-200 cursor-pointer">Profile</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;