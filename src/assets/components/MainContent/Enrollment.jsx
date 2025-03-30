import React from "react";
import img from "../../Images/webImg.png";

const Enrollment = ({ bgColor = "bg-white", textColor = "text-gray-900" }) => {
  return (
    <div className={`w-full py-24 px-10 md:px-16 ${bgColor}`}>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center text-left'>
        <div className={`${textColor}`}>
          <h2 className='text-xl md:text-3xl font-bold leading-tight'>
            Mastering Proven Strategies That Drive Real Results
          </h2>
          <p className='mt-4 text-xs opacity-80'>
            Unleash the power of strategic marketing with our comprehensive
            course, designed to empower you with the skills and knowledge
            necessary to navigate the dynamic landscape of modern business.
          </p>
          <button className='mt-6 bg-lime-600 hover:bg-lime-900 text-white px-5 py-2 text-xs rounded-full'>
            Enroll Now
          </button>

          <ul className='mt-4 space-y-2 text-xs opacity-80'>
            <li>&#10003; Money-back guarantee</li>
            <li>&#10003; Scalable growth tools</li>
            <li>&#10003; Access to members-only community</li>
          </ul>
        </div>
        <div className='relative flex justify-center'>
          <img
            src={img}
            alt='Web Marketing'
            className='w-3/4 max-w-[200px] md:max-w-[250px] lg:max-w-[300px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]'
          />
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
