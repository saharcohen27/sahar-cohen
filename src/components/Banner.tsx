import React from "react";
import { BannerProps } from "../utils/types.tsx";

const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <div
      className="banner-container"
    >
      <div className="banner-content">
        {children}
      </div>
    </div>
  );
};

export default Banner;
