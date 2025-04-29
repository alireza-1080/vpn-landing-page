import React from "react";

import HeroDescription from "./HeroDescription";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col p-5 lg:p-10 lg:flex-row lg:items-center">
      <HeroImage />
      <HeroDescription />
    </div>
  );
};

export default Hero;
