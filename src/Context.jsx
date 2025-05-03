import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=12');
      const data = response.data.map(item => ({
        id: item.id,
        title: item.title.split(' ').slice(0, 3).join(' '),
        price: Math.floor(Math.random() * 1000) + 100,
        image: item.thumbnailUrl
      }));
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums?_limit=8');
      const data = response.data.map(item => ({
        id: item.id,
        name: item.title.split(' ').slice(0, 2).join(' '),
        image: `https://picsum.photos/200/200?random=${item.id}`
      }));
      setCategories(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <AppContext.Provider 
      value={{ 
        products, 
        categories, 
        cart, 
        isLoading, 
        error, 
        addToCart 
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);