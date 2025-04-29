import React from "react";

import HeroDescription from "./HeroDescription";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div
      id="about"
      className="container mx-auto mt-24 flex flex-col p-5 lg:flex-row lg:items-center lg:p-10"
    >
      <HeroImage />
      <HeroDescription />
    </div>
  );
};

export default Hero;
