import React from "react";

interface BannerProps {
  children: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <div
      className="flex justify-center items-center w-full py-4 px-1 shadow-inner
                bg-gradient-to-l from-slate-200 via-slate-300 to-slate-400"
    >
      <div className="p-1 bg-white bg-opacity-30 rounded-md shadow-md">
        {children}
      </div>
    </div>
  );
};

export default Banner;
