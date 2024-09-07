import React from "react";
import Icon from "./Icon.tsx";
import { ButtonType } from "../utils/types";

type ButtonsProps = { buttons: ButtonType[]; className?: string | null };

const Buttons: React.FC<ButtonsProps> = ({ buttons, className = "" }) => {
  return (
    <div className={`flex items-center space-x-2 ${className || ""}`}>
      {buttons.map((item) => {
        if (!item.href) {
          return (
            <div className="button" key={item.title}>
              {" "}
              <Icon icon={item.icon} className={!!item.title ? "mr-2" : ""} />
              {item?.title}
            </div>
          );
        }

        return (
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="button"
            key={item.href}
          >
            <Icon icon={item.icon} className={!!item.title ? "mr-2" : ""} />
            {item?.title}
          </a>
        );
      })}
    </div>
  );
};

export default Buttons;
