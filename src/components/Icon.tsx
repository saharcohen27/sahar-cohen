import React from "react";

import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";

import { IconType } from "../utils/types.tsx";
import iconComponents from "../utils/Icons.tsx";

type IconProps = { icon: IconType; className?: string };

const Icon: React.FC<IconProps> = ({ icon, className = "" }) => {
  const { iconName, ...props } = icon;
  const IconComponent = iconComponents[iconName] || DoNotDisturbIcon || (
    <div>ICON</div>
  );
  return <IconComponent {...props} className={className} />;
};

export default Icon;
