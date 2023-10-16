import HeroSection from '../components/herosection/'
import FormSection from "../components/formsection/";
import type { Metadata } from "next";
import ProjectSection from '@/components/projectssection/projectsection';

export const metadata: Metadata = {
  title:"Benjamin Riderelli",
  description:"Benjamin Riderelli portfolio page",
  keywords:"benjamin riderelli, projects, proyectos"
}



export default function Home() {
  return (
    <section className="min-h-screen">
      <HeroSection />
      <ProjectSection/>
      <FormSection/>
    </section>
  );
}
