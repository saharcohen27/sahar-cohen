import React from "react";
import { FooterItemProps } from "../utils/types.tsx";
import Icon from "./Icon.tsx";

const FooterItem: React.FC<FooterItemProps> = ({ title, icon, link }) => {
  return (
    <li key={title} className="footer-item">
      <Icon icon={icon} />
      <div className="ml-2">
        {!link ? <div>{title}</div> : <a href={link}>{title}</a>}
      </div>
    </li>
  );
};

export default FooterItem;
