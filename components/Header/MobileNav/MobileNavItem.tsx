import React, { ReactNode } from "react";

const MobileNavItem = ({
  children,
  onClick,
  "data-testid": dataTestId,
}: {
  children: ReactNode;
  onClick: () => void;
  "data-testid"?: string;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-pointer px-5 py-2 text-lg font-semibold text-blue-500"
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};

export default MobileNavItem;
