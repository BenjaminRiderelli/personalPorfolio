import {ReactNode, useState} from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

interface CarouselProps {
  children: ReactNode[];
}

const CustomCarousel = ({ children }: CarouselProps) => {

  const [currentSlide, setCurrentSlide] = useState(0)
  

  const prevSlide = () => setCurrentSlide(current => current === 0 ? children.length : current -1)

  


  return (
    <div className="h-full overflow-hidden relative">
      <button className="border-2 border-black absolute right-4 top-1/2 hover:cursor-pointer active:scale-95 bg-white p-2 ">
        <BsChevronCompactRight size={30} />
      </button>
      <button className="border-2 border-black absolute left-4 top-1/2 hover:cursor-pointer active:scale-95 bg-white  p-2">
        <BsChevronCompactLeft size={30} />
      </button>
      <div className="flex h-full"> {children}</div>
    </div>
  );
};

export default CustomCarousel;
