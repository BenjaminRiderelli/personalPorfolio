import HeroSection from '../components/herosection/index'
import AboutMe from "../components/aboutme/index";
import FormSection from "../components/formsection/index";

export default function Home() {
  return (
    <section className="min-h-screen">
      <HeroSection />
      <AboutMe />
      <FormSection/>
    </section>
  );
}
