import React from "react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  return (
      <header className="container mx-auto p-5 flex items-center justify-between lg:p-10">
        <Logo />
        <MobileNav />
        <DesktopNav />
      </header>

  ) 
};

export default Header;
