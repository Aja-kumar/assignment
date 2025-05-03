import React from 'react';
import { useAppContext } from '../Context';
import { FaSpinner } from 'react-icons/fa';

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CategoryCarousel = () => {
  const { categories, isLoading, error } = useAppContext();

  if (isLoading) return (
      <div className="flex justify-center items-center h-32">
        <FaSpinner className="animate-spin text-3xl text-blue-500" />
      </div>
    );

  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Shop by Category</h2>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={16}
        slidesPerView={2}
        navigation
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 }
        }}
      >
        {categories.map(category => (
          <SwiperSlide key={category.id}>
            <div className="flex-shrink-0">
              <div className="bg-white rounded-lg shadow-md p-2 text-center h-full">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-2"
                />
                <p className="text-sm font-medium truncate">{category.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryCarousel;