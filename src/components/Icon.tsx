import React from "react";

import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";

import { IconProps } from "../utils/types.tsx";
import iconComponents from "../utils/Icons.tsx";


const Icon: React.FC<IconProps> = ({ icon }) => {
  const { iconName, ...props } = icon;
  const IconComponent = iconComponents[iconName] || DoNotDisturbIcon || (
    <div>ICON</div>
  );
  return <IconComponent {...props} />;
};

export default Icon;
