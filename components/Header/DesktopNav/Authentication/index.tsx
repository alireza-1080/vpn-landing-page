import { Button } from "@/components/ui/button";
import React from "react";

const Authentication = () => {
  return (
    <div className="flex gap-5">
      <Button variant='ghost' size='lg' className="font-semibold border ring-1 ring-transparent border-transparent hover:bg-blue-500 hover:text-white xl:text-lg hover:ring-blue-500 hover:border-blue-500 cursor-pointer">Sign In</Button>
      <Button
        variant="outline"
        size='lg'
        className="text-blue-500 ring-1 ring-blue-500 hover:bg-blue-500 xl:text-lg hover:text-white hover:border-blue-500 cursor-pointer"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default Authentication;
