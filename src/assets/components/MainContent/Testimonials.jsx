import React from "react";
import Review from "../Utilities/ReviewData";
import ReviewCard from "../Utilities/ReviewCard";


const Testimonials = () => {
    return (
        <section className="py-12 px-6 bg-gray-100">
            <div className="max-w-6xl mx-auto text-center flex justify-between items-center">
                <div className="flex flex-col text-left">
                    <p className="text-green-600 font-semibold">TESTIMONIALS</p>
                    <h2 className="text-3xl font-bold mt-2">What they say about us</h2>
                </div>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-left">
                    Our open, positive, and proactive approach helps us find ways to align
                    your work environment with the culture and attitude you and your team aspire.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
                {Review.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
