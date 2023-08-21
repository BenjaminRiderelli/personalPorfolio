import Head from "next/head";
import Project from "./singleproject";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Benjamin Riderelli - Projects",
  description: "Benjamin Riderelli projects page",
  keywords:"benjamin riderelli, desarrollo web, web development"
};

export default function Projects() {
  return (
    <section className="flex min-h-full flex-col items-center justify-between ">
      <Project row={2} />
      <Project row={3} />
      <Project row={4} />
      <Project row={5} />
    </section>
  );
}
