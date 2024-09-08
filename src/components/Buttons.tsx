import React from "react";
import Icon from "./Icon.tsx";
import { ButtonType } from "../utils/types";

type ButtonsProps = {
  buttons: ButtonType[];
  className?: string | null;
  buttonClass?: string;
};

const Buttons: React.FC<ButtonsProps> = ({
  buttons,
  className = "",
  buttonClass = "",
}) => {
  return (
    <div className={`flex items-center space-x-2 ${className || ""}`}>
      {buttons.map((item) => {
        if (!item.href) {
          return (
            <div className={buttonClass} key={item.title}>
              <Icon icon={item.icon} />
              <div className={!!item.title ? "ml-2" : ""}>{item?.title}</div>
            </div>
          );
        }

        return (
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={`button ${buttonClass}`}
            key={item.href}
          >
            <Icon icon={item.icon} />
            <div className={!!item.title ? "ml-2" : ""}>{item?.title}</div>
          </a>
        );
      })}
    </div>
  );
};

export default Buttons;
