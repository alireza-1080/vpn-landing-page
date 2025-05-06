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
    <div className="relative flex max-w-80 flex-col justify-center rounded-2xl border-[3px] border-blue-500 bg-white px-5 py-5 transition duration-300 sm:w-96 lg:hover:-translate-y-5">
      <div className="mx-auto flex w-3/5 justify-center">{children}</div>
      <div className="mt-3 flex w-full justify-center">
        <h4 className="text-2xl font-semibold">{title}</h4>
      </div>
      <Accordion
        type="single"
        collapsible
        className="mx-auto my-3 w-10/12 lg:hidden"
      >
        <AccordionItem value={title} className="max-w-full">
          <AccordionTrigger className="flex justify-center gap-25 font-semibold">
            Values
          </AccordionTrigger>
          <AccordionContent className="mx-auto w-fit">
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
      <div className="mx-auto my-10 hidden flex-col justify-center lg:flex">
        {options.map((option) => {
          return (
            <div key={crypto.randomUUID()} className="flex items-center gap-3">
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
      <div className="flex w-full justify-center">
        <h6 className="text-lg font-semibold">
          {price ? `$${price}/mo` : "Free"}
        </h6>
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Button
          variant={"default"}
          className="w-full cursor-pointer rounded border border-blue-500 px-10 text-white ring ring-blue-500 transition duration-300 hover:bg-blue-700 hover:text-white"
        >
          Select
        </Button>
      </div>
    </div>
  );
};

export default PlanItem;
