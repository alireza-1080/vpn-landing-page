import Image from "next/image";
import React from "react";
import logo from "@/public/pngs/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={'/'} className="flex items-center lg:grow-[1] gap-2">
      <Image
        src={logo}
        alt="logo"
        width={100}
        height={100}
        className="size-10 lg:size-16"
      />
      <span className="text-gray-900 font-semibold text-xl">
        Safe<span className="text-blue-500 font-bold">VPN</span>
      </span>
    </Link>
  );
};

export default Logo;
