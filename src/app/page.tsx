import HeroSection from './(home)/(herosection)'
import AboutMe from "./(home)/(aboutme)";
import FormSection from "./(home)/(formsection)";

export default function Home() {
  return (
    <section className="min-h-screen">
      <HeroSection />
      <AboutMe />
      <FormSection/>
    </section>
  );
}
