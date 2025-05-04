import React from "react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  return (
    <header className="fixed top-0 left-1/2 z-50 w-full -translate-x-1/2 bg-white p-5 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <MobileNav />
        <DesktopNav />
      </div>
    </header>
  );
};

export default Header;
