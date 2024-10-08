import React, { useRef } from "react";
import Buttons from "./Buttons.tsx";
import { useIsVisible } from "../hooks/useIsVisible.tsx";
import { ProjectProps } from "../utils/types";

const Project: React.FC<ProjectProps> = ({
  bg,
  title,
  desc,
  stack,
  buttons,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(elementRef);

  return (
    <div
      className={`project ${isVisible ? "opacity-100" : "opacity-0"}`}
      ref={elementRef}
    >
      <img className="project-img rounded-t-lg" src={bg} alt="project-logo" />
      <Buttons buttons={stack} buttonClass="flex items-center rounded-lg p-1" />
      <div className="p-5 space-y-3">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-200">{desc}</p>
        <Buttons buttons={buttons} className="bottom-0 justify-center" />
      </div>
    </div>
  );
};

export default Project;
