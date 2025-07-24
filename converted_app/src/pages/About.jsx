import React from 'react';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  return (
    <div className="bg-[#1abc9c] text-white py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="ABOUT COMPONENT" darkMode={true} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <p className="text-lg">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div>
            <p className="text-lg">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

