import React from "react";
import FeatureItem from "./FeatureItem";

const FeaturesDescription = () => {
  return (
    <div className="my-6 flex flex-col justify-center gap-10 lg:my-0 2xl:gap-14">
      <h2 className="flex justify-center gap-1.5 text-center text-2xl font-semibold sm:text-4xl xl:text-5xl">
        Why choose{" "}
        <span className="font-bold">
          Safe<span className="text-blue-500">VPN</span>
        </span>
        ?
      </h2>
      <div className="flex flex-col gap-2 lg:gap-5">
        <FeatureItem>Connection speed</FeatureItem>
        <FeatureItem>Dedicated IP</FeatureItem>
        <FeatureItem>Malware scan for downloads</FeatureItem>
        <FeatureItem>Alerts about leaked credentials</FeatureItem>
        <FeatureItem>Tracker and ad blocker</FeatureItem>
      </div>
    </div>
  );
};

export default FeaturesDescription;
