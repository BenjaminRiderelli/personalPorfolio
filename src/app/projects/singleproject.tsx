"use client";
import Image from "next/image";
import { useState, useEffect, FC } from "react";
import { Carousel } from "./carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from "react";

interface SheetData {
  name: string;
  description: string;
  pics: any[];
  techStack: string[];
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
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/getprojectbyid?id=${row}`);
      const data = await response.json();
      return data;
    };

    const updateTestData = async () => {
      const data = await fetchData();
      const [name, description, pics, techStack] = data.body.data.values[0];

      setTestData({
        name,
        description,
        pics: JSON.parse(pics) ?? [],
        techStack: JSON.parse(techStack) ?? [],
      });
    };

    updateTestData();
  }, []);

  const techStack = testData.techStack.map((tech) => (
    <li key={tech}>
      <p className="text-xl">{tech}</p>
    </li>
  ));

  return (
    <section className={`flex flex-col lg:${row % 2 === 0 ? "flex-row " : "flex-row"}h-full w-full border-b-2 border-black`}>
      <div className="flex items-center  bg-white w-full min-h-screen lg:w-2/4">
        <Carousel images={testData.pics} />
      </div>

      <div className="flex flex-col w-full min-h-screen lg:w-1/2 bg-white lg:border-l-2 lg:border-black ">
        <div className="flex flex-col lg:flex-row lg:border-b-2 lg:border-black h-full lg:h-1/4 w-full">
          <div className="flex pt-8 lg:pt-0 items-center justify-center w-full lg:w-3/4  border-t-2 lg:border-r-2 lg:border-t-0  border-black pl-8">
            <h2 className="text-4xl">{testData.name}</h2>
          </div>
          <ul className="flex flex-col md:flex-row lg:flex-col justify-center p-8 gap-4">
            {techStack}
          </ul>
        </div>

        <div className="h-full w-full p-8">
          <p className="w-full h-full text-xl">{testData.description}</p>
        </div>
      </div>
    </section>
  );
}
