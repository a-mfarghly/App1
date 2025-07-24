import React from 'react';

const SectionTitle = ({ title, darkMode = false }) => {
  return (
    <div className="text-center mb-10">
      <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-[#1f3040]'}`}>
        {title}
      </h2>
      <div className="flex items-center justify-center">
        <div className={`w-24 h-1 ${darkMode ? 'bg-white' : 'bg-[#1f3040]'}`}></div>
        <div className={`mx-3 text-2xl ${darkMode ? 'text-white' : 'text-[#1f3040]'}`}>
          ★
        </div>
        <div className={`w-24 h-1 ${darkMode ? 'bg-white' : 'bg-[#1f3040]'}`}></div>
      </div>
    </div>
  );
};

export default SectionTitle;

