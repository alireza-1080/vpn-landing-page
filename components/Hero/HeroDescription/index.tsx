import { Button } from "@/components/ui/button";
import React from "react";

const HeroDescription = () => {
  return (
    <div className="my-6 flex flex-col gap-10 lg:my-0 lg:grow 2xl:gap-14">
      <h2 className="text-center text-3xl leading-12 font-semibold 2xl:text-4xl">
        Break through limitations with{" "}
        <span className="font-black">
          Safe<span className="text-blue-500">VPN</span>
        </span>
      </h2>
      <p className="text-center 2xl:text-lg">
        Provides network for all your needs to have access to unlimited free
        secure internet using{" "}
        <span className="font-semibold">
          Safe
          <span className="font-bold text-blue-500">VPN</span>.
        </span>
      </p>
      <Button className="mx-auto cursor-pointer px-10 py-8 text-2xl shadow-xl shadow-blue-500">
        Get Started
      </Button>
    </div>
  );
};

export default HeroDescription;
