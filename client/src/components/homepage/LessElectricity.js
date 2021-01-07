import React from "react";
import solarVideo from "../../assets/solar-panel-video.mp4";

const LessElectricity = () => {
  return (
    <div id="less-electricity">
      <div>
        <h1>Electricity For Less</h1>
        <p>
          Use solar energy to power your home and reduce your dependence on the
          grid. Purchase solar at the lowest price of any national provider with
          Electric Power Service's price match guarantee and take control of
          your monthly electricity bill. Learn more about your potential savings
          in our Design Studio.
        </p>
      </div>
      <div>
          <video preload="auto" playsInline autoPlay muted>
            <source src={ solarVideo } type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
      </div>
    </div>
  );
};

export default LessElectricity;
