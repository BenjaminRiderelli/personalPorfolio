import HeroSection from '../components/herosection/'
import AboutMe from "../components/aboutme/";
import FormSection from "../components/formsection/";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:"Benjamin Riderelli",
  description:"Benjamin Riderelli portfolio page",
  keywords:"benjamin riderelli, projects, proyectos"
}



export default function Home() {
  return (
    <section className="min-h-screen">
      <HeroSection />
      <AboutMe />
      <FormSection/>
    </section>
  );
}
