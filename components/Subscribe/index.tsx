import Image from "next/image";
import React from "react";
import discount from "@/public/pngs/discount.png"

const Subscribe = () => {
  return (
    <div id="subscribe" className="mt-15 flex flex-col gap-15 bg-gray-300 px-5 py-15 lg:flex-row lg:items-center">
      <div className="flex flex-col items-center gap-10 flex-10/12 lg:flex-row lg:justify-around">
        <Image src={discount} width={500} height={500} alt="discount" className="w-full max-w-25 lg:max-w-32"></Image>
        <h3 className="text-center text-2xl font-semibold text-shadow-blue-500 sm:text-4xl lg:text-5xl leading-relaxed">
          Subscribe and save <br />{" "}
          <span className="font-semibold text-blue-500">20%</span>{" "}
          <span className="font-semibold">today!</span>
        </h3>
      </div>
      <div className="w-full text-center flex-3/12">
        <button className="hover: w-full rounded-lg tracking-wider hover:tracking-widest transition-all duration-300 cursor-pointer bg-blue-500 py-5 font-bold text-white hover:bg-blue-700 max-w-80 lg:max-w-full">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
