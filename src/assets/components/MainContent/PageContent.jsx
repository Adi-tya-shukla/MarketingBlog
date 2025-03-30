import React from "react";
import Enrollment from "./Enrollment";
import Testimonials from "./Testimonials";
import FeaturedList from "./FeaturedList";
import MarketingToolkit from "./Marketing";
import CourseSummary from "./CourseSummary";
import Pricing from "./Pricing";
import Learning from "./Learning";
import Promo from "./Promo";

const PageContent = () => {
  return (
    <>
      <Enrollment bgColor='bg-white' textColor='text-gray-900' />
      <FeaturedList/>
      <MarketingToolkit/>
      <CourseSummary/>
      <Learning/>
      <Promo/>
      <Pricing/>
      <Testimonials/>
      <Enrollment bgColor='bg-green-800' textColor='text-white' />
    </>
  );
};

export default PageContent;
