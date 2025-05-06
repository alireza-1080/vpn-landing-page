import Image from "next/image";
import React from "react";
import worldMap from "@/public/pngs/world-map.png";

const Locations = () => {
  return (
    <div id="servers" className="container mx-auto flex flex-col items-center justify-center gap-10 overflow-hidden p-5 sm:mt-10 sm:gap-15">
      <h3 className="text-center text-2xl font-semibold sm:text-4xl lg:text-5xl">
        Huge Global Network of Fast VPN
      </h3>
      <div className="h-fit w-full max-w-7xl">
        <Image
          src={worldMap}
          width={2000}
          height={2000}
          quality={100}
          alt="world-map"
          className="w-full"
        ></Image>
      </div>
    </div>
  );
};

export default Locations;
