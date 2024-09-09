import React from "react";
import { BannerProps } from "../utils/types.tsx";

const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <div
      className="flex justify-center items-center w-full py-4 px-1 shadow-inner
                gradient"
    >
      <div className="p-1 bg-white bg-opacity-60 rounded-md shadow-md">
        {children}
      </div>
    </div>
  );
};

export default Banner;
