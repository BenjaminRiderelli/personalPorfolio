import React from "react";
import { Skeleton } from "@mui/material";
import { BsCodeSlash, BsGithub } from "react-icons/bs";

const Loading = () => {
  return (
    <section
      className={`flex flex-col items-center justify-center min-h-full w-screen border-b-2 border-light-text-color dark:border-dark-text-color bg-light-bg-color dark:bg-dark-bg-color p-4`}
    >
      <div
        className={`flex flex-col w-full lg:w-3/4 bg-light-bg-color dark:bg-dark-bg-color border-light-text-color dark:border-dark-text-color text-light-text-color dark:text-dark-text-color border-2 pb-4`}
      >
        <div className="flex flex-col lg:flex-row lg:border-b-2 border-light-text-color dark:border-dark-text-color h-full lg:h-1/4 w-ful">
          <div className="flex pt-8 lg:pt-0 items-center justify-center w-full lg:w-3/4  border-t-2 lg:border-r-2 lg:border-t-0  border-light-text-color dark:border-dark-text-color pl-8">
          </div>
          <ul className="flex flex-col md:flex-row lg:flex-col justify-center p-8 gap-2">
            <Skeleton width={"100%"} height="100%" />
          </ul>
        </div>

        <div className="flex flex-col items-centerjustify-between gap-8 h-full w-full p-8 ">
          <p className="w-full h-full text-xl">
            <Skeleton height={300} />
          </p>
          <div className="flex gap-16">
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
        <div className="flex w-full lg:w-3/5 max-h-[400px] self-center border-2 border-light-text-color">
          <Skeleton height={400} className="h-[300px] w-full" />
        </div>
      </div>
    </section>
  );
};

export default Loading;
