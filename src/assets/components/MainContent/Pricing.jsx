import React from 'react'

const Pricing = () => {
    return (
        <div className="max-w-6xl mx-auto p-10">
          <p className="text-green-600 uppercase text-sm font-semibold">Pricing</p>
          <h1 className="text-4xl font-bold mt-2 leading-tight">
            Choose the pricing that <br /> works best for you
          </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-gray-100 p-10 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Monthly Subscription</h3>
              <p className="text-gray-600 text-sm mt-1">
                Fuel your product workflow with more advanced research features
              </p>
              <p className="text-3xl font-bold mt-4">$49 <span className="text-gray-600 text-sm">/ Month</span></p>
    
              <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition">
                Enroll Now →
              </button>
    
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  ✅ Money back guarantee
                </li>
                <li className="flex items-center gap-2">
                  ✅ Satisfaction Guaranteed
                </li>
                <li className="flex items-center gap-2">
                  ✅ Or get your money back within 30 days
                </li>
              </ul>
            </div>
           <div className="bg-gray-100 p-10 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-full">
                ⭐ Best Value
              </div>
    
              <h3 className="text-xl font-semibold">One-Time Payment</h3>
              <p className="text-gray-600 text-sm mt-1">
                Scale product research and learning across your company
              </p>
              <p className="text-3xl font-bold mt-4">$299 <span className="text-green-600 text-sm">(Save 20%)</span></p>
    
              <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition">
                Enroll Now →
              </button>
    
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  ✅ Everything in Basic, and
                </li>
                <li className="flex items-center gap-2">
                  ✅ Scalable growth tools
                </li>
                <li className="flex items-center gap-2">
                  ✅ Access to members-only community
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

export default Pricing
