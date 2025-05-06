import React from "react";

interface FooterField {
  name: string;
  fields: string[];
}

const FooterDesktopItem = ({ footerField }: { footerField: FooterField }) => {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <h3 className="text-2xl">{footerField.name}</h3>
      <ul className="flex w-full flex-col items-center gap-5">
        {footerField.fields.map((field) => {
          return (
            <h5
              key={crypto.randomUUID()}
              className="cursor-pointer text-blue-500 transition-all duration-300 hover:font-semibold hover:tracking-widest text-xl"
            >
              {field}
            </h5>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterDesktopItem;
