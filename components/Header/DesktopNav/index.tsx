import React from "react";
import NavSection from "./NavSection";
import Authentication from "./Authentication";

const DesktopNav = () => {
  return (
    <div className="hidden grow-[2] items-center justify-between lg:flex">
      <NavSection />
      <Authentication />
    </div>
  );
};

export default DesktopNav;
