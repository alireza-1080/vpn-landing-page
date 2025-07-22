import React from "react";

import HeroDescription from "./HeroDescription";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section
      id="about"
      className="container mx-auto flex flex-col p-5 pt-20 lg:flex-row lg:items-center lg:p-10 lg:pt-20"
    >
      <HeroImage />
      <HeroDescription />
    </section>
  );
};

export default Hero;
