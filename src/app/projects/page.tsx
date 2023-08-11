"use client";
import Image from "next/image";
import Project from "./singleproject"

export default function Projects() {

  return (
    <section className="flex h-full flex-col items-center justify-between">
      <Project row="2"/>
    </section>
  );
}
