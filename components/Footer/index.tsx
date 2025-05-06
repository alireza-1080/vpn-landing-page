import Image from "next/image";
import React from "react";
import logo from "@/public/pngs/logo.png";
import FooterMobile from "./FooterMobile";
import FooterDesktop from "./FooterDesktop";

const Footer = () => {
  const footerFields = [
    {
      name: "Products",
      fields: [
        "Download",
        "Pricing",
        "Locations",
        "Servers",
        "Countries",
        "Blog",
      ],
    },
    {
      name: "Engagement",
      fields: [
        "SafeVPN",
        "FAQ",
        "Tutorials",
        "About us",
        "Privacy Policy",
        "Terms",
      ],
    },
    { name: "Make money", fields: ["Affiliate", "Partnership"] },
  ];

  const year = new Date(Date.now()).getFullYear().toString()

  return (
    <footer className="w-full bg-gray-300">
      <div className="container mx-auto flex w-full px-5 py-15 flex-col items-center gap-10">
        <div className="flex items-center gap-5">
          <Image
            src={logo}
            width={500}
            height={500}
            alt="logo"
            className="size-15 lg:size-24"
          />
          <h4 className="text-xl lg:text-3xl">
            Safe<span className="font-semibold text-blue-500">VPN</span>
          </h4>
        </div>
        <FooterMobile footerFields={footerFields}/>
        <FooterDesktop footerFields={footerFields}/>
        <div>
          <h6>&copy;{year}_SafeVPN</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
