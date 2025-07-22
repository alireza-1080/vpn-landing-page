import React from "react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  return (
    <header className="fixed top-0 left-1/2 z-50 flex h-20 w-full -translate-x-1/2 items-center bg-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-5">
        <Logo />
        <MobileNav />
        <DesktopNav />
      </div>
    </header>
  );
};

export default Header;
