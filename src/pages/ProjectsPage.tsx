import React from "react";
import Project from "../components/Project.tsx";
import { PROJECTS } from "../utils/constants.ts";

const Projects: React.FC = () => {
  return (
    <div className="screen-center">
      <div className="title mt-10">Recent Projects</div>
      <div className="page-content mb-5 md:flex-row space-y-4 lg:space-x-4 lg:space-y-0 md:space-x-4 md:space-y-0 opacity-90">
        {PROJECTS.map((proj) => {
          return (
            <Project
              key={proj.title}
              bg={proj.bg}
              title={proj.title}
              desc={proj.desc}
              buttons={proj.buttons}
              stack={proj.stack}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
