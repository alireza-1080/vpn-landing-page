import React from "react";
import Plans from "./Plans";

const Pricing = () => {
  return (
    <div id="pricing" className="flex w-full flex-col gap-5 px-5 py-10 justify-center">
      <h3 className="flex justify-center">Choose Your Plan Today</h3>
      <Plans />
    </div>
  );
};

export default Pricing;
