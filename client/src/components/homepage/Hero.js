import React from "react";
import OrderNow from "./OrderNow";

const Hero = () => {
  const nextView = () => {
    const nextViewId = document.querySelector("#secondHomepageSection");
    nextViewId.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <section
      id="firstHomepageSection"
      className="flex__container flex__wrap"
      style={{ backgroundImage: "url(./assets/hero.jpg)" }}
    >
      <div className="flex__basis__full flex__container flex__direction__column align__items__center">
        <h1 className="font__bold margin__zero color__indigo">
          Solar for Existing Roofs
        </h1>
        <h4 className="font__bold margin__zero color__indigo">
          Convert Sunlight into Energy
        </h4>
      </div>
      <div id="heroFooter" className="align__self__end">
        <OrderNow buttonColor="white" />
        <br />
        <span id="heroFooterArrow" onClick={ nextView }></span>
      </div>
    </section>
  );
};

export default Hero;
