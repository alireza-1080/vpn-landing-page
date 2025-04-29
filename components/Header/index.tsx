import React from "react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  return (
    <header className="container flex items-center justify-between p-5 fixed top-0 bg-white shadow-lg z-50 left-1/2 -translate-x-1/2">
      <Logo />
      <MobileNav />
      <DesktopNav />
    </header>
  );
};

export default Header;
