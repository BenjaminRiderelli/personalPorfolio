import { ReactNode, useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

interface CarouselProps {
  children: ReactNode[];
}

const CustomCarousel = ({ children }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () =>
    setCurrentSlide((current) => {
      return current === 0 ? children.length : current - 1;
    });
  const nextSlide = () =>
    setCurrentSlide((current) => {
      return current === children.length - 1 ? 0 : current + 1;
    });

  return (
    <div className="h-full w-full overflow-hidden relative">
      <div
        className="flex h-full w-full transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100})%` }}
      >
        {children}
      </div>
      <button
        onClick={nextSlide}
        className="border-2 border-black absolute right-4 top-1/2 hover:cursor-pointer active:scale-95 bg-white p-2 "
      >
        <BsChevronCompactRight size={30} />
      </button>
      <button
        onClick={prevSlide}
        className="border-2 border-black absolute left-4 top-1/2 hover:cursor-pointer active:scale-95 bg-white  p-2"
      >
        <BsChevronCompactLeft size={30} />
      </button>
    </div>
  );
};

export default CustomCarousel;
