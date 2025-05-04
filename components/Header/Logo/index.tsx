import Image from "next/image";
import React from "react";
import logo from "@/public/pngs/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2 lg:grow-[1]">
      <Image
        src={logo}
        alt="logo"
        width={100}
        height={100}
        className="size-10 lg:size-16"
      />
      <span className="text-xl font-semibold text-gray-900">
        Safe<span className="font-bold text-blue-500">VPN</span>
      </span>
    </Link>
  );
};

export default Logo;
