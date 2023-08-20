"use client";
import { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import { BsGithub, BsCodeSlash } from "react-icons/bs";
import CustomCarousel from "../../components/carousel/carousel";

interface SheetData {
  name: string;
  description: string;
  pics: any[];
  techStack: string[];
  workingLink: string;
  githubLink: string;
}

interface ProjectProps {
  row: number;
}

export default function Project({ row }: ProjectProps) {
  const [testData, setTestData] = useState<SheetData>({
    name: "",
    description: "",
    pics: [],
    techStack: [],
    workingLink: "",
    githubLink: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch(`/api/getprojectbyid?id=${row}`);
      const data = await response.json();
      return data;
    };

    const updateTestData = async () => {
      const data = await fetchData();
      const [name, description, pics, techStack, workingLink, githubLink] =
        data.body.data.values[0];
      setTestData({
        name,
        description,
        pics: JSON.parse(pics) ?? [],
        techStack: JSON.parse(techStack) ?? [],
        workingLink,
        githubLink,
      });
      setIsLoading(false);
    };

    updateTestData();
  }, [row]);

  const techStack = testData.techStack.map((tech) => (
    <li key={tech}>
      <p className="text-lg">{tech}</p>
    </li>
  ));

  if (isLoading) {
    return (
      <section
        className={`flex flex-col ${
          row % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        } h-full w-full border-b-2 border-light-text-color dark:border-dark-text-color `}
      >
        <div className="flex items-center justify-center bg-light-bg-color dark:bg-dark-bg-color w-full min-h-screen lg:w-3/4">
          <Skeleton width="90%" height="100vh" />
        </div>
        <div
          className={`flex flex-col w-full min-h-screen lg:w-1/2 bg-light-bg-color dark:bg-dark-bg-color ${
            row % 2 == 0 ? "lg:border-l-2" : "lg:border-r-2"
          } border-light-text-color dark:border-dark-text-color`}
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
            <Skeleton height="80vh" />

            <div className="flex gap-16 text-light-text-color dark:text-dark-text-color">
              <span className="flex gap-4 items-center cursor-pointer">
                <BsCodeSlash />
                <a target="_blank" href={testData.workingLink}>
                  Live Link
                </a>
              </span>
              <span className="flex gap-4 items-center cursor-pointer">
                <BsGithub />
                <a target="_blank" href={testData.githubLink}>
                  Github Link
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        className={`flex flex-col ${
          row % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        } h-full w-full border-b-2 border-light-text-color dark:border-dark-text-color`}
      >
        <div className="flex items-center  bg-light-bg-color dark:bg-dark-bg-color w-full min-h-screen lg:w-3/4">
          <CustomCarousel>
            {testData.pics.map((image) => {
              return <img className=" object-cover" key={image} alt="project image" src={image} />;
            })}
          </CustomCarousel>
        </div>

        <div
          className={`flex flex-col w-full min-h-screen lg:w-1/2 bg-light-bg-color dark:bg-dark-bg-color ${
            row % 2 == 0 ? "lg:border-l-2" : "lg:border-r-2"
          } border-light-text-color dark:border-dark-text-color text-light-text-color dark:text-dark-text-color`}
        >
          <div className="flex flex-col lg:flex-row lg:border-b-2 border-light-text-color dark:border-dark-text-color h-full lg:h-1/4 w-full">
            <div className="flex pt-8 lg:pt-0 items-center justify-center w-full lg:w-3/4  border-t-2 lg:border-r-2 lg:border-t-0  border-light-text-color dark:border-dark-text-color pl-8">
              <h2 className="text-4xl">{testData.name}</h2>
            </div>
            <ul className="flex flex-col md:flex-row lg:flex-col justify-center p-8 gap-2">
              {techStack}
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-8 h-full w-full p-8 ">
            <p className="w-full h-full text-xl">{testData.description}</p>
            <div className="flex gap-16">
              <span className="flex gap-4 items-center cursor-pointer">
                <BsCodeSlash />
                <a target="_blank" href={testData.workingLink}>
                  Live Link
                </a>
              </span>
              <span className="flex gap-4 items-center cursor-pointer">
                <BsGithub />
                <a target="_blank" href={testData.githubLink}>
                  Github Link
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
