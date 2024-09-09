import React from "react";

import TypingAnimation from "../components/TypingAnimation.tsx";

const Header = () => {
  return (
    <div className="gradient shadow-md shadow-slate-200 text-white flex justify-center items-center z-50 h-[4rem] fixed w-full">
      <TypingAnimation text={"{ Sahar Cohen }"} />
    </div>
  );
};

export default Header;
