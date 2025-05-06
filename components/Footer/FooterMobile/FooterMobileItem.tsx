import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


interface FooterField {
  name: string;
  fields: string[];
}

const FooterMobileItem = ({ footerField }: { footerField: FooterField }) => {
  return (
    <AccordionItem value={footerField.name}>
      <AccordionTrigger className="font-semibold text-lg cursor-pointer">{footerField.name}</AccordionTrigger>
      <AccordionContent>
        <ul className="px-5 flex flex-col gap-5">
          {footerField.fields.map((field) => {
            return (
              <div key={crypto.randomUUID()} className="cursor-pointer">
                <h5 className="text-blue-500 underline underline-offset-8">{field}</h5>
              </div>
            );
          })}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

export default FooterMobileItem;
