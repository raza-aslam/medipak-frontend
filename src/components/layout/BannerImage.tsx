"use client";
import { useState, useEffect } from 'react';
import { BannerImages } from '../shared/InfrasturctureData';
import Image from 'next/image'
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

const BannerImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % BannerImages.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + BannerImages.length) % BannerImages.length);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % BannerImages.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {BannerImages.map((item, index) => (
          <div key={item.id} className="min-w-full flex-shrink-0">
            <Image
              src={item.Image}
              alt={`${index + 1}`}
              className="w-full h-auto object-cover"
              layout="responsive"
              width={100}
              height={50}
              sizes="(max-width: 768px) 100vw, 
                     (max-width: 1200px) 50vw, 
                     33vw"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center px-4">
       
        <IoMdArrowDropleft size={36}   onClick={goToPreviousSlide} className='text-[#FF9100] bg-white rounded-full focus:outline-none absolute left-4 top-1/2 transform -translate-y-1/2' />
        
        <div className="flex flex-1 justify-center space-x-2 absolute bottom-4">
          {BannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'} focus:outline-none`}
            />
          ))}
        </div>
       
         <IoMdArrowDropright  size={36}   onClick={goToPreviousSlide} className='text-[#FF9100] bg-white rounded-full focus:outline-none absolute right-4 top-1/2 transform -translate-y-1/2'/>
        
      </div>
    </div>
  );
};

export default BannerImage;
