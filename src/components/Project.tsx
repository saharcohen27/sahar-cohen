import React from "react";
import Buttons from "./Buttons.tsx";
import { ProjectProps } from "../utils/types";
const Project: React.FC<ProjectProps> = ({ bg, title, desc, buttons }) => {
  return (
    <div className="project">
      <div className="flex justify-center items-center flex-row space-x-10">
        <img src={bg} alt="project-img" className="project-img" />
        <div className="sub-title font-bold text-lg">{title}</div>
      </div>
      <p className="desc">{desc}</p>
      <Buttons buttons={buttons} className="bottom-0 justify-center" />
    </div>
  );
};

export default Project;
