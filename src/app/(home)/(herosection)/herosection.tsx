
import Kaleidoscope from "./kaleidoscope";

export default function HeroSection() {
  return (
    <section 
    className="flex flex-wrap md:h-full min-h-screen justify-between p-2 pt-12 bg-white border-2 border-black ">
      <Kaleidoscope />
      <div className="flex flex-col gap-12  md:gap-3  lg:gap-9 w-full lg:w-1/2 min-h-500px p-9 lg:pt-32">
        <h1 className="text-6xl tracking-tighter">
          Hi! I'm <span className="font-semibold">Benjamin</span>
        </h1>
        <div>
          <p className="text-2xl leading-8 tracking-wide">
            A Barcelona based web developer born in the other side of the
            Atlantic ocean.
            <br />I made this site to expose a little of who I am, practice some
            new techniques and to showcase some of my work.
          </p>
        </div>
      </div>
    </section>
  );
}