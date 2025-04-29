import Link from "next/link";
import React, { ReactNode } from "react";
import { SheetClose } from "@/components/ui/sheet";

const MobileNavItem = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <SheetClose asChild>
      <Link href={href}>
        <span className="cursor-pointer px-5 py-2 text-lg font-semibold text-blue-500">
          {children}
        </span>
      </Link>
    </SheetClose>
  );
};

export default MobileNavItem;
