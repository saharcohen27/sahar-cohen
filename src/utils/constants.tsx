import URLsMetaDataLogo from "../assets/MetadataFetcherLogo.png";
import SaharCohenLogo from "../assets/logo512.png";

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
    bg: "https://play-lh.googleusercontent.com/lYct05jtKtKomCRbp8ejICumrzv7g87zs88jrWPhI1UdS-dur_JLL2dJUxuF_JvXDoDZ=w240-h480-rw",
    title: "Spyfall",
    desc: "This React-based application provides an interactive platform for playing the popular social game, Spyfall. By leveraging Gemini AI, the app generates unique and engaging locations for each round.",
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
      {
        title: "3 Days",
        icon: {
          iconName: "AccessTimeIcon",
          fontSize: "small",
        },
      },
    ],
  },
  {
    bg: URLsMetaDataLogo,
    title: "URL's Fetcher",
    desc: "Efficiently retrieves and displays metadata for a given set of URLs. The application have a user-friendly frontend built with JavaScript and React, the backend is powered by Node.js and Express, handling the URL processing and data retrieval.",
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
      {
        title: "1 Day",
        icon: {
          iconName: "AccessTimeIcon",
          fontSize: "small",
        },
      },
    ],
  },
];
