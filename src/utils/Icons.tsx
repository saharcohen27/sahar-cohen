import React from "react";

import SmartphoneIcon from "@mui/icons-material/Smartphone";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PlaceIcon from "@mui/icons-material/Place";
import TodayIcon from "@mui/icons-material/Today";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

const CustomIcons = [
  {
    name: "ReactIcon",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "TypeScriptIcon",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "NodeIcon",
    src: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
  },
  {
    name: "ExpressIcon",
    src: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
  },
  {
    name: "JavaScriptIcon",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
  },
  {
    name: "GeminiIcon",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
  },
];

const GetCustomComponent: React.FC<{
  name: string;
  src: string;
}> = ({ name, src }) => (
  <img src={src} alt={name} style={{ width: "26px", height: "26px" }} />
);

const dynamicComponents: { [key: string]: React.ComponentType } = {};
for (const icon of CustomIcons) {
  const componentName = icon.name;
  const componentCode = GetCustomComponent({ name: icon.name, src: icon.src });

  // Create a React function component using JSX
  dynamicComponents[componentName] = () => componentCode;
}

let iconComponents: { [key: string]: React.ComponentType } = {
  PersonIcon,
  SmartphoneIcon,
  AlternateEmailIcon,
  PlaceIcon,
  TodayIcon,
  LinkedInIcon,
  GitHubIcon,
  WhatsAppIcon,
  EmailIcon,
  OpenInBrowserIcon,
};

iconComponents = {
  ...iconComponents,
  ...dynamicComponents,
};

export default iconComponents;
