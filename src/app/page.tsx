import Image from "next/image";
import HeroSection from "./(home)/(herosection)/herosection";
import AboutMe from "./(home)/(aboutme)/aboutme";

export default function Home() {
  return (
    <section className="h-full">
      <HeroSection />
      <AboutMe />
    </section>
  );
}
