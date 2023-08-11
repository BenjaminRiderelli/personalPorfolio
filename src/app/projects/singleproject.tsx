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
  row: string;
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
    <p className="text-xl">{tech}</p>
  ));

  return (
    <section className="flex flex-col lg:flex-row h-full w-full border-b-2 border-black ">
      <div className="flex items-center  bg-white w-full h-full lg:w-3/4 ">
        <Carousel images={testData.pics} />
      </div>

      <div className="flex flex-col w-full min-h-full lg:w-1/2 bg-white lg:border-l-2 lg:border-black ">
        <div className="flex flex-col lg:flex-row lg:border-b-2 lg:border-black h-full lg:h-1/4 w-full">
          <div className="flex pt-8 lg:pt-0 items-center justify-center w-full lg:w-3/4  border-t-2 lg:border-r-2 lg:border-t-0  border-black pl-8">
            <h2 className="text-5xl md:text-6xl">{testData.name}</h2>
          </div>
          <ul className="flex flex-row lg:flex-col justify-center p-4 gap-4">
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
