import React from "react";

const Company = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full cursor-pointer justify-center">{children}</div>
  );
};

export default Company;
