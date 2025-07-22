import Image from "next/image";
import React from "react";
import discount from "@/public/pngs/discount.png";

const Subscribe = () => {
  return (
    <section id="subscribe" className="w-full scroll-mt-20 bg-gray-100">
      <div className="container mx-auto mt-15 flex flex-col gap-15 px-5 py-15 lg:flex-row lg:items-center">
        <div className="flex flex-3/4 flex-col items-center gap-10 lg:flex-row">
          <Image
            src={discount}
            width={500}
            height={500}
            alt="discount"
            className="w-full max-w-25 lg:max-w-32 lg:flex-1/3"
          />
          <h3 className="justify-center text-center text-2xl leading-relaxed font-semibold text-shadow-blue-500 sm:text-4xl lg:flex-2/3 lg:text-5xl">
            Subscribe and save <br />{" "}
            <span className="font-semibold text-blue-500">20%</span>{" "}
            <span className="font-semibold">today!</span>
          </h3>
        </div>
        <div className="w-full flex-1/4 text-center">
          <button className="hover: w-full max-w-80 cursor-pointer rounded-lg bg-blue-500 py-5 font-bold tracking-wider text-white transition-all duration-300 hover:bg-blue-700 hover:tracking-widest lg:max-w-full">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
