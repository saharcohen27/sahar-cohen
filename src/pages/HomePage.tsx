import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DownloadIcon from "@mui/icons-material/Download";
import Buttons from "../components/Buttons.tsx";
import { BUTTONS } from "../utils/constants.ts";
import logo from "../logo512.png";
import resume from "../assets/CV Sahar Cohen.pdf";

const HomePage = () => {
  return (
    <div className="screen-center">
      <div className="page-content space-y-10">
        <img
          src={logo}
          alt="logo"
          className="logo size-[14rem] md:size-[18rem] lg:size-[20rem]"
        />
        <div className="mt-12 md:mt-0 lg:mx-8 lg:space-y-4">
          <div className="flex title">
            I'm Sahar Cohen <div className="waving animate-wave">👋</div>
          </div>
          <div className="sub-title">
            <code>
              {"<"}Full Stack Developer{" />"}
            </code>
          </div>
          <p>
            I've been coding for many years and gained experience in both
            frontend and backend development. I've been coding since I can
            remember and am passionate about building innovative solutions. I
            love staying up-to-date with the latest trends and technologies in
            the tech industry.
          </p>
          <Buttons buttons={BUTTONS} className="mt-2 md:mt-5 lg:mt-7" />
          <a
            href={resume}
            download
            className="mt-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <DownloadIcon className="fill-current w-4 h-4 mr-2" />
            <span>Download CV</span>
          </a>
        </div>
        <div className="downarrow lg:invisible mag">
          <ArrowDownwardIcon fontSize="large" className="animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
