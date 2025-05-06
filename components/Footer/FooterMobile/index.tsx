import { Accordion } from "@/components/ui/accordion";
import React from "react";
import FooterMobileItem from "./FooterMobileItem";

interface FooterField {
  name: string;
  fields: string[];
}

const FooterMobile = ({ footerFields }: { footerFields: FooterField[] }) => {
  return (
    <Accordion type="single" collapsible className="w-full lg:hidden">
      {
        footerFields.map(footerField => {
            return (
                <FooterMobileItem key={crypto.randomUUID()} footerField={footerField}/>
            )
        })
      }
    </Accordion>
  );
};

export default FooterMobile;
