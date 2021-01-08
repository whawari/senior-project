import React from "react";
import OrderNow from "./OrderNow";

const BannerWithImage = ({
  header,
  description,
  isVideo,
  isReversed,
  videoSrc,
  imgSrc,
  sectionId
}) => {
  return (
    <section
      id={ sectionId }
      className={`banner-with-image flex__container flex__column__reverse flex__direction__column flex__nowrap ${
        isReversed ? "desktop__reverserow__nowrap" : "desktop__row__nowrap"
      }`}
    >
      <div className="left-column flex__container flex__direction__column flex__nowrap justify__center">
        <h1>{header}</h1>
        <p>{description}</p>
        <OrderNow buttonColor="black" />
      </div>
      <div className="right-column flex__one">
        {isVideo ? (
          <video preload="auto" playsInline autoPlay muted>
            <source src={videoSrc} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        ) : (
          <img src={imgSrc} alt="hero" />
        )}
      </div>
    </section>
  );
};

export default BannerWithImage;
