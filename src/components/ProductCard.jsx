import React from 'react';
import { useAppContext } from '../Context';

const ProductCard = ({ product }) => {
  const { addToCart } = useAppContext();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-medium text-gray-800 mb-1 truncate">{product.title}</h3>
        <p className="text-purple-600 font-bold mb-3">₹{product.price}</p>
        <button 
          onClick={() => addToCart(product)}
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;