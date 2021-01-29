import React, { useEffect } from "react";
import Hero from "./Hero";
import BannerWithImage from "./BannerWithImage";
import AOS from "aos"
import "aos/dist/aos.css";
import "./index.css";
import { useLocation } from "react-router-dom";

const Homepage = () => {
  AOS.init();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <>
      <Hero />
      <BannerWithImage
        isVideo={ true }
        videoSrc="./assets/solar-panel-video.mp4"
        header="Electricity For Less"
        description="Use solar energy to power your home and reduce your dependence on the
          grid. Purchase solar at the lowest price of any national provider with
          Electric Power Service's price match guarantee and take control of
          your monthly electricity bill. Learn more about your potential savings
          in our Design Studio."
        sectionId="secondHomepageSection"
      />
      <BannerWithImage
        isReversed={ true }
        imgSrc="./assets/solar-panel-2.jpg"
        header="Sleek and Durable"
        description="Our solar panels are low-profile and durable — quietly converting 
          sunlight to energy for decades to come. Integrated hardware and simple design 
          achieve this by securing the panels close to your roof and to each other for 
          a minimal aesthetic."
        sectionId="ThirdHomepageSection"
      />
    </>
  );
};

export default Homepage;
