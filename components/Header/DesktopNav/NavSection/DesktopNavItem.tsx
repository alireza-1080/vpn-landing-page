import Link from "next/link";
import React, { ReactNode } from "react";

const DesktopNavItem = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-1 px-3 py-1 font-semibold transition duration-300 hover:text-blue-500 xl:text-lg"
    >
      <span>{children}</span>
      <button
        type="button"
        className="h-0.5 w-full origin-bottom scale-x-0 bg-blue-500 transition duration-300 group-hover:scale-x-100"
      ></button>
    </Link>
  );
};

export default DesktopNavItem;
