import HeroSection from "./(home)/(herosection)/herosection";
import AboutMe from "./(home)/(aboutme)/aboutme";
import FormSection from "./(home)/(formsection)/formsection";

export default function Home() {
  return (
    <section className="h-full">
      <HeroSection />
      <AboutMe />
    </section>
  );
}
