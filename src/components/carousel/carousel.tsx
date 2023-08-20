import { useState, useEffect, ReactNode } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft, BsArrow90DegRight } from "react-icons/bs";

interface CarouselProps {
  children: ReactNode[];
  autoSlide: boolean;
  autoSlideInterval: number;
}

export default function Carousel({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex w-full transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1  shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <BsChevronCompactLeft size={40} />
        </button>
        <div className="md:hidden absolute flex flex-col justify-center items-center transform -translate-x-1/2 -translate-y-1/2 border top-1/2 left-1/2 bg-slate-600 p-8 opacity-70">
            <BsArrow90DegRight className="color-black"/>
            <p className="text-black">Turn me arround</p>
        </div>
        <button
          onClick={next}
          className="p-1 shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <BsChevronCompactRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {children.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
