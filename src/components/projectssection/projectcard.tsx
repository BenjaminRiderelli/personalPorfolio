import React from "react";
import Image from "next/image";
import { BsGithub, BsCodeSlash } from "react-icons/bs";
import { fetchData } from "@/app/projects/[id]/page";
import Link from "next/link";

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

const ProjectCard = async ({ row }: ProjectProps) => {
  const res = await fetchData(row);
  const [name, description, pics, techStackArr, workingLink, githubLink] = res;

  const data: SheetData = {
    name,
    description,
    pics: JSON.parse(pics) ?? [],
    techStack: JSON.parse(techStackArr) ?? [],
    workingLink,
    githubLink,
  };

  const techStack = data.techStack.map((tech: string) => (
    <li key={tech}>
      <p className="text-lg">{tech}</p>
    </li>
  ));

  return (
    <div className="flex flex-col gap-4 border-2 border-r-0 border-l-0 md:border-l-2 md:border-r-2 border-light-text-color dark:border-dark-text-color p-4">
      <div className="flex flex-col items-center justify-center relative border-light-text-color dark:border-dark-text-color w-[500px] max-w-[calc(100vw-2.5rem)] h-[300px] overflow-hidden">
        <Link
        href={`/projects/${row}`}
        >
          <Image
            className="transition-all hover:scale-105 cursor-pointer z-10 border-2 border-light-text-color dark:border-dark-text-color "
            fill={true}
            src={data.pics[0]}
            alt={`picture of project ${row}`}
          />
        </Link>
      </div>
      <div className="border-2 border-light-text-color dark:text-dark-text-color dark:border-dark-text-color">
        <h2 className="text-light-text-color text-center text-2xl p-4">
          {data.name}
        </h2>
        <div className="flex flex-col gap-2 pb-4">
          <ul className="flex gap-4 justify-center flex-wrap">{techStack}</ul>
          <div className="flex justify-center gap-16">
            <span className="flex gap-4 items-center cursor-pointer">
              <BsCodeSlash />
              <a target="_blank" href={data.workingLink}>
                Live Link
              </a>
            </span>
            <span className="flex gap-4 items-center cursor-pointer">
              <BsGithub />
              <a target="_blank" href={data.githubLink}>
                Github Link
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
