import React from "react";

interface BannerProps {
  children: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <div
      className="flex justify-center items-center w-full py-4 px-1 shadow-inner
                bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500"
    >
      <div className="p-1 bg-white bg-opacity-30 rounded-md shadow-md">
        {children}
      </div>
    </div>
  );
};

export default Banner;
