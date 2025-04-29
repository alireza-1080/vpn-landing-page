import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";
import { FaCheck } from "react-icons/fa6";

const PlanItem = ({
  children,
  title,
  options,
  price,
}: {
  children: ReactNode;
  title: string;
  options: Array<string>;
  price: number | undefined;
}) => {
  return (
    <div className="relative flex max-w-80 flex-col justify-center border-[3px] border-blue-200 px-5 py-5 rounded-lg hover:border-blue-500 transition duration-300 sm:w-96">
      <div className="mx-auto flex w-3/5 justify-center">{children}</div>
      <div className="mt-3 flex w-full justify-center">
        <h4 className="text-2xl font-semibold">{title}</h4>
      </div>
      <Accordion type="single" collapsible className="mx-auto w-10/12 my-3 lg:hidden">
        <AccordionItem value={title} className="max-w-full">
          <AccordionTrigger className="font-semibold">Values</AccordionTrigger>
          <AccordionContent>
            {options.map((option) => {
              return (
                <div
                  key={crypto.randomUUID()}
                  className="flex items-center gap-3"
                >
                  <div className="text-green-500">
                    <FaCheck />
                  </div>
                  <div>
                    <h5 className="">{option}</h5>
                  </div>
                </div>
              );
            })}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex flex-col justify-center mx-auto my-10">
      {options.map((option) => {
              return (
                <div
                  key={crypto.randomUUID()}
                  className="flex items-center gap-3"
                >
                  <div className="text-green-500">
                    <FaCheck />
                  </div>
                  <div>
                    <h5 className="">{option}</h5>
                  </div>
                </div>
              );
            })}
      </div>
      <div className="w-full flex justify-center">
        <h6 className="text-lg font-semibold">{price ? `$${price}/mo` : "Free"}</h6>
      </div>
      <div className="w-full flex justify-center mt-5">
        <Button variant={"outline"} className="px-10 text-blue-500 border border-blue-500 ring ring-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 cursor-pointer">Select</Button>
      </div>
    </div>
  );
};

export default PlanItem;
