"use client";
import Image from "next/image";
import { useState, useEffect, FC } from "react";
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

  return <div>{JSON.stringify(testData.techStack)}</div>;
}
