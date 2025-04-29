import React from "react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between p-5 fixed top-0 bg-white shadow-lg">
      <Logo />
      <MobileNav />
      <DesktopNav />
    </header>
  );
};

export default Header;
