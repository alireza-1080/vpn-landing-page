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
      <div className="rounded-full bg-blue-100 p-8 text-3xl text-blue-500">
        {children}
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold">{stat}</h3>
        <h2 className="text-xl font-semibold first-letter:text-blue-500">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default StatItem;
