import React from "react";
import features from "@/public/pngs/features.png";
import Image from "next/image";

const FeaturesImage = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <Image
        src={features}
        width={1000}
        height={1000}
        priority
        quality={100}
        alt="digitalWorld"
        className="w-full max-w-96"
      />
    </div>
  );
};

export default FeaturesImage;
