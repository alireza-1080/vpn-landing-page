import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import burgerMenu from "@/public/pngs/burger-menu.png";
import Image from "next/image";
import MobileNavItem from "./MobileNavItem";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer lg:hidden">
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
              <MobileNavItem href="/">About</MobileNavItem>
              <MobileNavItem href="#features">Features</MobileNavItem>
              <MobileNavItem href="#pricing">Pricing</MobileNavItem>
              <MobileNavItem href="#testimonials">Testimonials</MobileNavItem>
              <MobileNavItem href="#help">Help</MobileNavItem>
            </SheetDescription>
          </div>
        </SheetHeader>
        <SheetFooter>
          <div className="flex gap-2">
            <SheetClose asChild>
              <Button className="flex-1/2 font-semibold">Sign In</Button>
            </SheetClose>
            <SheetClose asChild>
              <Button
                variant="outline"
                className="flex-1/2 text-blue-500 ring-1 ring-blue-500 hover:bg-blue-50 hover:text-blue-600"
              >
                Sign Up
              </Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
