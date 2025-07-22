"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import burgerMenu from "@/public/pngs/burger-menu.png";
import Image from "next/image";
import MobileNavItem from "./MobileNavItem";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // 300ms delay to allow the sheet to close
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="cursor-pointer lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={burgerMenu}
          width={100}
          height={100}
          alt="burger-menu-icon"
          className="size-6 sm:size-8"
        ></Image>
      </SheetTrigger>
      <SheetContent className="lg:hidden">
        <SheetHeader>
          <SheetTitle className="hidden">Are you absolutely sure?</SheetTitle>
          <div className="mt-8">
            <SheetDescription className="flex flex-col gap-3 sm:gap-5">
              <MobileNavItem
                onClick={() => handleLinkClick("#about")}
                data-testid="about-mobile-nav-item"
              >
                About
              </MobileNavItem>
              <MobileNavItem onClick={() => handleLinkClick("#features")}>
                Features
              </MobileNavItem>
              <MobileNavItem onClick={() => handleLinkClick("#pricing")}>
                Pricing
              </MobileNavItem>
              <MobileNavItem onClick={() => handleLinkClick("#servers")}>
                Servers
              </MobileNavItem>
              <MobileNavItem onClick={() => handleLinkClick("#subscribe")}>
                Subscribe
              </MobileNavItem>
            </SheetDescription>
          </div>
        </SheetHeader>
        <SheetFooter>
          <div className="flex gap-2">
            <Button className="flex-1/2 font-semibold">Sign In</Button>
            <Button
              variant="outline"
              className="flex-1/2 text-blue-500 ring-1 ring-blue-500 hover:bg-blue-50 hover:text-blue-600"
            >
              Sign Up
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
