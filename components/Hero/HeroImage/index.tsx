import Image from "next/image";
import React from "react";
import digitalWorld from "@/public/pngs/digital-world.png";

const HeroImage = () => {
  return (
    <div className="flex w-full items-center justify-center lg:grow">
      <Image
        src={digitalWorld}
        width={1000}
        height={1000}
        priority
        quality={100}
        alt="digitalWorld"
        className="w-full max-w-96 lg:max-w-10/12"
      />
    </div>
  );
};

export default HeroImage;
