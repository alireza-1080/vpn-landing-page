import React from "react";
import Plans from "./Plans";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="flex w-full flex-col justify-center gap-15 px-5 py-10"
    >
      <h3 className="text-center text-2xl font-semibold sm:text-4xl lg:text-5xl">
        Choose Your Plan Today
      </h3>
      <Plans />
    </div>
  );
};

export default Pricing;
