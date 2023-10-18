import React from "react";
import { Skeleton } from "@mui/material";
import { BsCodeSlash, BsGithub } from "react-icons/bs";
import Spinner from "@/components/spinner/spinner";

const Loading = () => {
  return (
    <>
      <section
        className={`flex lg:hidden flex-col min-h-[calc(100vh-4em)]  w-screen border-light-text-color dark:border-dark-text-color bg-light-bg-color dark:bg-dark-bg-color p-4`}
      >
        <div
          className={`flex flex-col justify-center grow w-full h-full border-2 border-light-text-color dark:border-dark-text-color`}
        >
          <Spinner />
        </div>
      </section>
      <section
        className={`hidden lg:flex flex-col items-center justify-center min-h-full w-screen border-b-2 border-light-text-color dark:border-dark-text-color bg-light-bg-color dark:bg-dark-bg-color p-4`}
      >
        <div
          className={`flex flex-col grow w-full lg:w-3/4 lg:h-full bg-light-bg-color dark:bg-dark-bg-color border-light-text-color dark:border-dark-text-color text-light-text-color dark:text-dark-text-color border-2 pb-4`}
        >
          <div className="flex flex-col lg:flex-row lg:border-b-2 border-light-text-color dark:border-dark-text-color h-full lg:h-1/4 w-ful">
            <div className="flex pt-8 lg:pt-0 items-center justify-center w-full lg:w-3/4  border-t-2 lg:border-r-2 lg:border-t-0  border-light-text-color dark:border-dark-text-color pl-8">
              <h2 className="text-4xl">
                <Skeleton height={"150px"} width={"320px"} />
              </h2>
            </div>
            <ul className="flex flex-col items-center md:flex-row lg:flex-col justify-center p-8 gap-2 border-2 w-1/4">
              <Skeleton height={"150px"} width={"120px"} />
            </ul>
          </div>

          <div className="flex flex-col items-centerjustify-between gap-8 h-full w-full p-8 ">
            <p className="flex justify-center w-full h-full text-xl grow">
              <Skeleton className="w-3/5" height={"200px"} />{" "}
            </p>
            {/* <div className="flex gap-16">
            <span className="flex gap-4 items-center cursor-pointer">
              <BsCodeSlash />
              <p>
                Live Link
              </p>
            </span>
            <span className="flex gap-4 items-center cursor-pointer">
              <BsGithub />
              <p>
                Github Link
              </p>
            </span>
          </div> */}
          </div>
          <div className="flex w-full lg:w-3/5 max-h-[350px] justify-self-center self-center">
            <Skeleton height={"300px"} width={"100%"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Loading;
