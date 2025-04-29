import React from "react";
import Plans from "./Plans";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="flex w-full flex-col justify-center gap-5 px-5 py-10"
    >
      <h3 className="flex justify-center text-2xl font-semibold md:text-3xl mb-5">
        Choose Your Plan Today
      </h3>
      <Plans />
    </div>
  );
};

export default Pricing;
