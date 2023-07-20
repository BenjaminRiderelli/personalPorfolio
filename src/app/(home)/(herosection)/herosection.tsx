
import Kaleidoscope from "./kaleidoscope";

export default function HeroSection() {
  return (
    <section 
    className="flex flex-wrap md:h-full justify-between p-2 pt-12 bg-white ">
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
            new techniques and to show a bit of what I
            have been doing so far. Hope you enjoy.
          </p>
        </div>
      </div>
    </section>
  );
}