import React from "react";
import Buttons from "./Buttons.tsx";
import { ProjectProps } from "../utils/types";

const Project: React.FC<ProjectProps> = ({
  bg,
  title,
  desc,
  stack,
  buttons,
}) => {
  const imageClass = `bg-${bg} bg-cover bg-center bg-opacity-5`;

  return (
    <div className={`project ${imageClass}`}>
      <Buttons
        buttons={stack}
        buttonClass="flex items-center bg-slate-100 rounded-lg p-1"
      />

      <h1 className="title-font sm:text-2xl text-xl font-medium text-slate-900 mb-3">
        {title}
      </h1>
      <p className="leading-relaxed mb-3">{desc}</p>
      <Buttons buttons={buttons} className="bottom-0 justify-center" />
    </div>
  );
};

export default Project;
