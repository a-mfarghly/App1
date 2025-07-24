import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import PortfolioItem from '../components/PortfolioItem';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const portfolioImages = [
    "port2.png",   
    "port3.png",   
    "poert1.png",   
    "port2.png",   
    "port3.png",   
    "poert1.png",   
   ];
  
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const handleClose = () => {
    setSelectedImage(null);
  };
  
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="PORTFOLIO COMPONENT" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <PortfolioItem key={index} image={image} onClick={() => handleImageClick(image)} />
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={handleClose}>
          <div className="relative" onClick={e => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged portfolio" className="max-w-full max-h-[80vh] rounded-lg shadow-lg" />
            <button onClick={handleClose} className="absolute top-2 right-2 bg-white rounded-full p-2 text-black text-xl">&times;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

