import React from "react";
import DesktopNavItem from "./DesktopNavItem";

const NavSection = () => {
  return (
    <nav className="flex grow items-center justify-center pr- xl:pr-10 2xl:pr-16 gap-3 xl:gap-5">
      <DesktopNavItem href="#about">About</DesktopNavItem>
      <DesktopNavItem href="#features">Features</DesktopNavItem>
      <DesktopNavItem href="#pricing">Pricing</DesktopNavItem>
      <DesktopNavItem href="#testimonials">Testimonials</DesktopNavItem>
      <DesktopNavItem href="#help">Help</DesktopNavItem>
    </nav>
  );
};

export default NavSection;
