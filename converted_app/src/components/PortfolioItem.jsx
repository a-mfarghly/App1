import React, { useState } from 'react';

const PortfolioItem = ({ image, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative rounded-lg overflow-hidden cursor-pointer" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img src={image} alt="Portfolio item" className="w-full h-full object-cover" />
      {isHovered && (
        <div className="absolute inset-0 bg-[#1abc9c] bg-opacity-80 flex items-center justify-center">
          <div className="text-white text-4xl">+</div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;

