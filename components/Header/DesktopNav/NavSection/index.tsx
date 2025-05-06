import React from "react";
import DesktopNavItem from "./DesktopNavItem";

const NavSection = () => {
  return (
    <nav className="pr- flex grow items-center justify-center gap-3 xl:gap-5 xl:pr-10 2xl:pr-16">
      <DesktopNavItem href="/">About</DesktopNavItem>
      <DesktopNavItem href="#features">Features</DesktopNavItem>
      <DesktopNavItem href="#pricing">Pricing</DesktopNavItem>
      <DesktopNavItem href="#servers">Servers</DesktopNavItem>
      <DesktopNavItem href="#subscribe">Subscribe</DesktopNavItem>
    </nav>
  );
};

export default NavSection;
