"use client";
import { useRef, useState, useEffect } from 'react';
import { Slidelogodata } from '../shared/InfrasturctureData'; // Ensure you have this data
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons

const SliderLogo = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(null);
  const [scrollDirection, setScrollDirection] = useState<'left' | 'right' | null>(null);

  // Start automatic scrolling on component mount
  useEffect(() => {
    const startAutoScroll = () => {
      if (sliderRef.current) {
        const interval = setInterval(() => {
          sliderRef.current?.scrollBy({
            left: 2, // Adjust the value for scrolling speed
            behavior: 'smooth',
          });
        }, 10); // Adjust interval for scrolling speed
        setScrollInterval(interval);
      }
    };

    startAutoScroll();

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [scrollInterval]);

  useEffect(() => {
    if (scrollDirection && sliderRef.current) {
      const interval = setInterval(() => {
        if (sliderRef.current) {
          sliderRef.current.scrollBy({
            left: scrollDirection === 'right' ? 2 : -2, // Adjust the value for scrolling speed
            behavior: 'smooth',
          });
        }
      }, 10); // Adjust interval for scrolling speed

      setScrollInterval(interval);

      return () => {
        if (scrollInterval) clearInterval(scrollInterval);
      };
    }
  }, [scrollDirection]);

  const startScroll = (direction: 'left' | 'right') => {
    setScrollDirection(direction);
    if (scrollInterval) clearInterval(scrollInterval);
  };

  const stopScroll = () => {
    setScrollDirection(null);
    if (scrollInterval) clearInterval(scrollInterval);
  };

  return (
    <div className='bg-[#97FEED]'> 
          <div className="text-center basis-full px-4 w-full min-h-[0.06rem] mb-16 text-4xl leading-none text-black font-semibold md:max-w-full pt-20">
    <h2 className="mt-4">Our Clients</h2>

  </div>
    
    
    <div className="relative overflow-hidden h-40">
          
      <button 
        onMouseDown={() => startScroll('left')}
        onMouseUp={stopScroll}
        onMouseLeave={stopScroll}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        <FaArrowLeft size={24} />
      </button>
      <button 
        onMouseDown={() => startScroll('right')}
        onMouseUp={stopScroll}
        onMouseLeave={stopScroll}
        className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        <FaArrowRight size={24} />
      </button>
      <div className="flex overflow-x-auto scroll-smooth whitespace-nowrap" ref={sliderRef}>
        {Slidelogodata.concat(Slidelogodata).map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-40 mx-4 flex flex-col items-center justify-center"
          >
            <Image
              src={slide.Image}
              alt={slide.title}
              className="object-contain"
              width={120}  // Adjust to desired logo size
              height={120} // Adjust to desired logo size
            />
            <h2 className="mt-2 text-sm font-bold text-center">
              {slide.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SliderLogo;
