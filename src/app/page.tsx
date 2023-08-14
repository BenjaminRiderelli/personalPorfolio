import HeroSection from '../components/herosection/'
import AboutMe from "../components/aboutme/";
import FormSection from "../components/formsection/";

export default function Home() {
  return (
    <section className="min-h-screen">
      <HeroSection />
      <AboutMe />
      <FormSection/>
    </section>
  );
}
