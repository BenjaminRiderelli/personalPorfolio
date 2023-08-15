import HeroSection from '../components/herosection/'
import AboutMe from "../components/aboutme/";
import FormSection from "../components/formsection/";
import Head from 'next/head';

export default function Home() {
  return (
    <section className="min-h-screen">
      <Head>
        <title>Benjamin Riderelli</title>
      </Head>
      <HeroSection />
      <AboutMe />
      <FormSection/>
    </section>
  );
}
