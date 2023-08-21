import React from "react";
import { Skeleton } from "@mui/material";
import { BsCodeSlash, BsGithub } from "react-icons/bs";

const Loading = () => {
  return (
    <section
      className={`flex flex-col lg:flex-row h-full w-full border-b-2 border-light-text-color dark:border-dark-text-color `}
    >
      <div className="flex items-center justify-center bg-light-bg-color dark:bg-dark-bg-color w-full min-h-screen lg:w-3/4">
        <Skeleton width="90%" height="100vh" />
      </div>
      <div
        className={`flex flex-col w-full min-h-screen lg:w-1/2 bg-light-bg-color dark:bg-dark-bg-color lg:border-l-2 border-light-text-color dark:border-dark-text-color`}
      >
        <div className="flex flex-col lg:flex-row lg:border-b-2 border-light-text-color dark:border-dark-text-color h-full lg:h-1/4 w-full">
          <div className="flex pt-8 lg:pt-0 items-center justify-center w-full lg:w-3/4  border-t-2 lg:border-r-2 lg:border-t-0  border-light-text-color dark:border-dark-text-color pl-8">
            <Skeleton width="85%" height="100%" />
          </div>
          <ul className="flex flex-col md:flex-row lg:flex-col w-1/3 justify-center p-8 gap-4">
            <Skeleton width={"100%"} />
            <Skeleton width={"100%"} />
            <Skeleton width={"100%"} />
            <Skeleton width={"100%"} />
          </ul>
        </div>

        <div className="flex flex-col justify-between gap-8 h-full w-full p-8 ">
          <Skeleton height="100%" />

          <div className="flex gap-16 text-light-text-color dark:text-dark-text-color">
            <span className="flex gap-4 items-center cursor-pointer">
              <BsCodeSlash />
              <p>Live Link</p>
            </span>
            <span className="flex gap-4 items-center cursor-pointer">
              <BsGithub />
              <p>Github Link</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
