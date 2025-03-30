import React from 'react'

const Promo = () => {
    return (
        <div className="bg-green-600 text-white py-14 px-10 flex flex-col md:flex-row justify-around items-center">
          <h1 className="text-2xl font-bold leading-tight">
            Ready to supercharge <br /> your marketing skills?
          </h1>
             <div className="text-right">
            <p className="mb-4 text-md">
              Our open, positive, and proactive approach helps us find <br />
              ways to align your work.
            </p>
            <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition">
              Get started now →
            </button>
          </div>
        </div>
      );
    }

export default Promo;
