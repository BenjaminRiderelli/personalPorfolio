"use client";
import Image from "next/image";
import Project from "./singleproject"

export default function Projects() {

  return (
    <section className="flex min-h-full flex-col items-center justify-between ">
      <Project row={2}/>
      <Project row={3}/>
      <Project row={4}/>
      <Project row={5}/>

    </section>
  );
}
