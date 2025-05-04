import React, { ReactNode } from "react";
import { FaCheck } from "react-icons/fa6";

const FeatureItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center gap-5 lg:text-2xl">
      <div className="flex h-fit items-center justify-center rounded-full bg-blue-100 p-1 text-blue-500">
        <FaCheck />
      </div>
      <div className="first-letter:text-2xl first-letter:text-blue-500 lg:first-letter:text-3xl">
        {children}
      </div>
    </div>
  );
};

export default FeatureItem;
