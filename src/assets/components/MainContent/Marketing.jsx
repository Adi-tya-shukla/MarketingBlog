import img from "../../Images/img-removebg-preview.png"
export default function MarketingToolkit() {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto p-8 gap-12">
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <img
            src={img} 
            alt="Marketing Illustration"
            className="w-full max-w-md"
          />
        </div>
        <div className="w-full lg:w-1/2 text-left">
          <p className="text-green-600 uppercase text-sm font-semibold">
            About The Course
          </p>
          <h1 className="text-3xl font-bold mt-2">
            Journey into Marketing Mastery: Unveiling The Marketing Toolkit
          </h1>
          <p className="text-gray-600 mt-3">
            Welcome to The Marketing Toolkit, your comprehensive guide to mastering modern marketing strategies.
          </p>
             <button className="bg-green-600 text-white px-6 py-3 rounded-md mt-4 hover:bg-green-700">
            Enroll Now →
          </button>
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto p-8 gap-12">
            <div>
              <h3 className="font-semibold">Premium Resources</h3>
              <p className="text-gray-600 text-sm">
                Gain exclusive access to a treasure trove of premium resources handpicked by industry experts.
              </p>
              <a href="#" className="text-green-600 text-sm font-semibold underline">Download Resources</a>
            </div>
            <div>
              <h3 className="font-semibold">Training Materials Included</h3>
              <p className="text-gray-600 text-sm">
                Enjoy comprehensive learning with all-inclusive training materials provided.
              </p>
              <a href="#" className="text-green-600 text-sm font-semibold underline">Download Materials</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  