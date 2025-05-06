import React from "react";

const Company = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full flex justify-center cursor-pointer">{children}</div>;
};

export default Company;
