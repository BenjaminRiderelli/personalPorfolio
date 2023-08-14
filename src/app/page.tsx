import HeroSection from './(home)/herosection/index'
import AboutMe from "./(home)/aboutme/index";
import FormSection from "./(home)/formsection/index";

export default function Home() {
  return (
    <section className="min-h-screen">
      <HeroSection />
      <AboutMe />
      <FormSection/>
    </section>
  );
}
