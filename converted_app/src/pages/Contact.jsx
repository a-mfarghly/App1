import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };
  
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="CONATCT SECTION" />
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input 
                type="text" 
                placeholder="userName" 
                className="w-full border-b-2 border-gray-300 py-3 focus:outline-none focus:border-[#1abc9c]" 
              />
            </div>
            <div className="mb-6">
              <input 
                type="text" 
                placeholder="userAge" 
                className="w-full border-b-2 border-gray-300 py-3 focus:outline-none focus:border-[#1abc9c]" 
              />
            </div>
            <div className="mb-6">
              <input 
                type="email" 
                placeholder="userEmail" 
                className="w-full border-b-2 border-gray-300 py-3 focus:outline-none focus:border-[#1abc9c]" 
              />
            </div>
            <div className="mb-6">
              <input 
                type="password" 
                placeholder="userPassword" 
                className="w-full border-b-2 border-gray-300 py-3 focus:outline-none focus:border-[#1abc9c]" 
              />
            </div>
            <button type="submit" className="bg-[#1abc9c] text-white px-6 py-3 rounded">
              send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

