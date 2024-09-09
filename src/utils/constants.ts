import SaharCohenLogo from "../assets/logo512.png";
import URLsFetcherLogo from "../assets/MetadataFetcherLogo.png";
import AgentLogo from "../assets/agent.png";
import CryptoLogo from "../assets/crypto.jpg";

export const FOOTER_ITEMS = [
  {
    title: "Sahar Cohen",
    icon: {
      iconName: "PersonIcon",
    },
  },
  {
    title: "050-458-8848",
    link: "tel:+972504588848",
    icon: {
      iconName: "SmartphoneIcon",
    },
  },
  {
    title: "saharcohen785@gmail.com",
    link: "mailto: saharcohen785@gmail.com",
    icon: {
      iconName: "AlternateEmailIcon",
    },
  },
  {
    title: "Holon, Israel",
    icon: {
      iconName: "PlaceIcon",
    },
  },
  {
    title: "Created at 2024",
    icon: {
      iconName: "TodayIcon",
    },
  },
];

export const BUTTONS = [
  {
    href: "https://www.linkedin.com/in/saharc/",
    icon: {
      iconName: "LinkedInIcon",
    },
  },
  {
    href: "https://github.com/saharcohen27",
    icon: {
      iconName: "GitHubIcon",
    },
  },
  {
    href: "mailto: saharcohen785@gmail.com",
    icon: {
      iconName: "EmailIcon",
    },
  },
  {
    href: "https://api.whatsapp.com/send?phone=972504588848",
    icon: {
      iconName: "WhatsAppIcon",
    },
  },
];

export const PROJECTS = [
  {
    bg: SaharCohenLogo,
    title: "Sahar Cohen",
    desc: "A personal website built with TypeScript and React.js, featuring a portfolio of my projects, contact information, and illustrative examples.",
    stack: [
      {
        icon: {
          iconName: "ReactIcon",
          fontSize: "small",
        },
      },
      {
        icon: {
          iconName: "TypeScriptIcon",
          fontSize: "small",
        },
      },
      {
        icon: {
          iconName: "TailwindIcon",
          fontSize: "small",
        },
      },
    ],
    buttons: [
      {
        href: "https://github.com/saharcohen27/sahar-cohen",
        title: "View Source",
        icon: {
          iconName: "GitHubIcon",
          fontSize: "small",
        },
      },
    ],
  },
  {
    bg: AgentLogo,
    title: "Spyfall",
    desc: "Platform for playing the popular social game, Spyfall. By leveraging Gemini AI, the app generates unique locations each round.",
    stack: [
      {
        icon: {
          iconName: "ReactIcon",
          fontSize: "small",
        },
      },
      {
        icon: {
          iconName: "JavaScriptIcon",
          fontSize: "small",
        },
      },
      {
        icon: {
          iconName: "GeminiIcon",
          fontSize: "small",
        },
      },
    ],
    buttons: [
      {
        href: "https://github.com/saharcohen27/spyfall",
        icon: {
          iconName: "GitHubIcon",
          fontSize: "small",
        },
      },
      {
        href: "https://saharcohen27.github.io/spyfall/",
        icon: {
          iconName: "OpenInBrowserIcon",
          fontSize: "small",
        },
      },
    ],
  },
  {
    bg: URLsFetcherLogo,
    title: "URL's Fetcher",
    desc: "Fetching URLs metadata. Minimum of 3 URLs as input and displays the resulting metadata.",
    stack: [
      {
        icon: {
          iconName: "ReactIcon",
          fontSize: "small",
        },
      },
      {
        icon: {
          iconName: "ExpressIcon",
          fontSize: "small",
        },
      },
      {
        icon: {
          iconName: "NodeIcon",
          fontSize: "small",
        },
      },
      {
        icon: {
          iconName: "JavaScriptIcon",
          fontSize: "small",
        },
      },
    ],
    buttons: [
      {
        href: "https://github.com/saharcohen27/urls-metadata-fetcher",
        icon: {
          iconName: "GitHubIcon",
          fontSize: "small",
        },
      },
      {
        href: "https://urls-metadata-fetcher-client.vercel.app/",
        icon: {
          iconName: "OpenInBrowserIcon",
          fontSize: "small",
        },
      },
    ],
  },
  {
    bg: CryptoLogo,
    title: "Live Streaming",
    desc: "For crypto traders, including APIs, interactive graphs, and a live streaming feature similar to Zoom.",
    stack: [
      {
        icon: {
          iconName: "PythonIcon",
          fontSize: "small",
        },
      },
      {
        icon: {
          iconName: "HTMLIcon",
          fontSize: "small",
        },
      },
      {
        icon: {
          iconName: "CSSIcon",
          fontSize: "small",
        },
      },
      {
        icon: {
          iconName: "JavaScriptIcon",
          fontSize: "small",
        },
      },
    ],
    buttons: [
      {
        title: "View Source",
        href: "https://github.com/saharcohen27/FlaskWebApp",
        icon: {
          iconName: "GitHubIcon",
          fontSize: "small",
        },
      },
    ],
  },
];
