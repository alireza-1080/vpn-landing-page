import React from "react";
import FeaturesImage from "./FeaturesImage";
import FeaturesDescription from "./FeaturesDescription";

const Features = () => {
  return (
    <div
      id="features"
      className="container mx-auto flex flex-col justify-center p-5 lg:flex-row lg:items-center lg:p-10"
    >
      <div className="order-1 flex justify-center lg:order-2 lg:w-1/2">
        <FeaturesImage />
      </div>
      <div className="order-2 flex justify-center lg:order-1 lg:w-1/2">
        <FeaturesDescription />
      </div>
    </div>
  );
};

export default Features;
