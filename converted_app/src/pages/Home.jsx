import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Home = () => {
  return (
    <div className="bg-[#1abc9c] text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <img 
            src="/public/avatar.png" 
            alt="Avatar" 
            className="w-48 h-48 rounded-full mx-auto object-cover" 
          />
        </div>
        <SectionTitle title="START FRAMEWORK" darkMode={true} />
        <p className="text-xl mt-6">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </div>
  );
};

export default Home;

