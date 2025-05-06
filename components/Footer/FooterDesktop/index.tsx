import React from "react";
import FooterDesktopItem from "./FooterDesktopItem";

interface FooterField {
  name: string;
  fields: string[];
}

const FooterDesktop = ({ footerFields }: { footerFields: FooterField[] }) => {
  return (
    <div className="hidden w-full grid-cols-3 justify-items-center lg:grid">
      {footerFields.map((footerField) => {
        return (
          <FooterDesktopItem
            key={crypto.randomUUID()}
            footerField={footerField}
          />
        );
      })}
    </div>
  );
};

export default FooterDesktop;
