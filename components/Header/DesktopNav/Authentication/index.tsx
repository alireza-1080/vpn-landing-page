import { Button } from "@/components/ui/button";
import React from "react";

const Authentication = () => {
  return (
    <div className="flex gap-5">
      <Button
        variant="ghost"
        size="lg"
        className="cursor-pointer border border-transparent font-semibold ring-1 ring-transparent transition-all duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white hover:ring-blue-500 xl:text-lg"
      >
        Sign In
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="cursor-pointer text-blue-500 ring-1 ring-blue-500 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white xl:text-lg"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default Authentication;
