import React, { ReactNode } from "react";

const StatItem = ({
  children,
  stat,
  title,
}: {
  children: ReactNode;
  stat: string;
  title: string;
}) => {
  return (
    <div className="flex items-center gap-5">
      <div className="text-blue-500 p-8 bg-blue-100 rounded-full text-3xl">{children}</div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold">{stat}</h3>
        <h2 className="first-letter:text-blue-500 text-xl font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default StatItem;
