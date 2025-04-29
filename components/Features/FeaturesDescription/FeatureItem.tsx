import React, { ReactNode } from "react";
import { FaCheck } from "react-icons/fa6";

const FeatureItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-5 items-center lg:text-2xl">
      <div className="flex items-center justify-center rounded-full bg-blue-100 p-1 text-blue-500 h-fit">
        <FaCheck />
      </div>
      <div className="first-letter:text-blue-500 first-letter:text-2xl lg:first-letter:text-3xl ">{children}</div>
    </div>
  );
};

export default FeatureItem;
