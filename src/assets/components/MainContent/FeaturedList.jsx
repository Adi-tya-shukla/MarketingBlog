import React from "react";
import Brands from "../Utilities/Brands";
import { motion } from "framer-motion";

const FeaturedList = () => {
  return (
    <section className="bg-green-600 py-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-white text-s">Featured in:</p>
        <div className="relative mt-4 w-full overflow-hidden">
          <motion.div
           className="flex"
           animate={{
               x: ['0%', '-100%'],
               transition: {
                   ease: 'linear',
                   duration: 15,
                   repeat: Infinity,
               }
           }}
          >
            {[...Brands, ...Brands].map((brand, index) => (
              <span key={index} className="text-white text-xl font-semibold capitalize px-6">
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedList;
