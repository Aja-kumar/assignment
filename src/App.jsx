import React from 'react';
import { AppProvider } from './Context';
import Navbar from './components/Navbar';
import CategoryCarousel from './components/CategoryCarousel';
import ProductsGrid from './components/ProductGrid';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main>
          <CategoryCarousel />
          <ProductsGrid />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;