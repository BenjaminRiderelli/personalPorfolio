"use client"
import { useState, useEffect, ReactNode } from "react";
import {
  BsChevronCompactRight,
  BsChevronCompactLeft,
  BsArrow90DegRight,
} from "react-icons/bs";

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
          className="p-1  shadow bg-white/80 text-gray-800 hover:bg-light-bg-color active:scale-95"
        >
          <BsChevronCompactLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 shadow bg-white/80 text-gray-800 hover:bg-light-bg-color active:scale-95"
        >
          <BsChevronCompactRight size={40} />
        </button>
      </div>
      {/* <div className="absolute bottom-4 right-0 left-0">
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
      </div> */}
    </div>
  );
}
