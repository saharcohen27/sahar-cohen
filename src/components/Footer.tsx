import React from "react";
import FooterItem from "./FooterItem.tsx";
import { FOOTER_ITEMS } from "../utils/constants.ts";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
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
