import React, { useState } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import PageContent from "./MainContent/PageContent";
const MainLayout = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <div>
       {isBannerVisible && (
        <div className='bg-green-900 text-white text-center py-2 text-xs flex justify-center items-center relative'>
          <span>
            📢 Open your account here to get cashback up to 10%.{" "}
            <a href='#' className='underline'>
              Learn How.
            </a>
          </span>
          <button
            className='absolute right-4 text-white text-lg'
            onClick={() => setIsBannerVisible(false)}
          >
            x
          </button>
        </div>
      )}
         <Navbar/>
         <PageContent/>
         <Footer/>      
    </div>
  )
}

export default MainLayout
