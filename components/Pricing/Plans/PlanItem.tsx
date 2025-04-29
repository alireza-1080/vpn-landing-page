import React, { ReactNode } from "react";

const PlanItem = ({
  children,
  title,
  options,
  price,
}: {
  children: ReactNode;
  title: string;
  options: Array<string>;
  price: number | undefined;
}) => {
  return <div>PlanItem</div>;
};

export default PlanItem;
