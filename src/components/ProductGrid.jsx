import React from 'react';
import { useAppContext } from '../Context';
import ProductCard from './ProductCard';
import { FaSpinner } from 'react-icons/fa';

const ProductsGrid = () => {
  const { products, isLoading, error } = useAppContext();

  if (isLoading) return (
    <div className="flex justify-center items-center h-32">
      <FaSpinner className="animate-spin text-3xl text-blue-500" />
    </div>
  );

  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Trending Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;