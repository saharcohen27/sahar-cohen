import React from "react";
import FooterItem from "./FooterItem.tsx";
import { FOOTER_ITEMS } from "../utils/constants.ts";

const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 bg-slate-800 flex justify-center">
      <div className="flex flex-col space-y-2 justify-between items-center text-white p-4 w-5/6 lg:flex-row lg:space-y-0">
        {FOOTER_ITEMS.map((item) => (
          <FooterItem
            icon={item.icon}
            title={item.title}
            link={item.link}
            key={item.title}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
