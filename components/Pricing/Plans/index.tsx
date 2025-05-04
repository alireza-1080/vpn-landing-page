import React from "react";
import PlanItem from "./PlanItem";
import free from "@/public/pngs/prize.png";
import gold from "@/public/pngs/gold-bars.png";
import diamond from "@/public/pngs/diamond.png";
import Image from "next/image";

const freeTierOptions = [
  "Limited bandwidth",
  "Encrypted connection",
  "10 GB of data",
  "No traffic logs",
  "1 Device only",
];

const goldTierOptions = [
  "Unlimited bandwidth",
  "Encrypted Connection",
  "100 GB of data",
  "Traffic logs",
  "5 devices",
];

const diamondTierOptions = [
  "Unlimited bandwidth",
  "Encrypted Connection",
  "Unlimited data",
  "Traffic logs",
  "10 devices",
];

const Plans = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-start xl:gap-30">
      <PlanItem title="Free" options={freeTierOptions} price={undefined}>
        <Image src={free} width={1000} height={1000} quality={100} alt="Free" />
      </PlanItem>
      <PlanItem title="Gold" price={9} options={goldTierOptions}>
        <Image src={gold} width={1000} height={1000} quality={100} alt="Gold" />
      </PlanItem>
      <PlanItem title="Diamond" price={12} options={diamondTierOptions}>
        <Image
          src={diamond}
          width={1000}
          height={1000}
          quality={100}
          alt="Diamond"
        />
      </PlanItem>
    </div>
  );
};

export default Plans;
