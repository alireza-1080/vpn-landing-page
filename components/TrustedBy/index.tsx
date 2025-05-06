import React from "react";
import discord from "@/public/pngs/discord.png";
import spotify from "@/public/pngs/spotify.png";
import amazon from "@/public/pngs/amazon.png";
import shopify from "@/public/pngs/shopify.png";
import nvidia from "@/public/pngs/nvidia.png";
import starbucks from "@/public/pngs/starbucks.png";
import Company from "./Company";
import Image from "next/image";

const TrustedBy = () => {
  const companies = [
    { name: "Spotify", img: spotify },
    { name: "Discord", img: discord },
    { name: "Shopify", img: shopify },
    { name: "Amazon", img: amazon },
    { name: "Starbucks", img: starbucks },
    { name: "Nvidia", img: nvidia },
  ];

  return (
    <div className="container mx-auto flex w-full flex-col items-center gap-15 p-5">
      <h3 className="text-center text-2xl font-semibold sm:text-4xl lg:text-5xl">
        Trusted by
      </h3>
      <div className="grid w-full grid-cols-3 gap-x-5 gap-y-10 xl:grid-cols-6">
        {companies.map((company) => {
          return (
            <Company key={company.name}>
              <Image
                src={company.img}
                width={1000}
                height={1000}
                alt={company.name}
                className="w-full max-w-25"
              />
            </Company>
          );
        })}
      </div>
    </div>
  );
};

export default TrustedBy;
