"use client";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Image from "next/image";

interface CarouselProps {
  images: any[];
}

export const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (side: string) => {
    const arrLength = images.length - 1;

    if (side === "right") {
      if (currentIndex < arrLength) {
        setCurrentIndex(currentIndex + 1);
        return;
      } else if (currentIndex === arrLength) {
        setCurrentIndex(0);
      }
    } else if (side === "left") {
      if (currentIndex === 0) {
        setCurrentIndex(arrLength);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }

    console.log(currentIndex);
  };
  return (
    <div className="flex items-center relative  w-full py-16 px-4 duration-500">
      <Image src={images[currentIndex]} fill={true} alt="project" />

      <button
        onClick={() => handleClick("left")}
        className="border-2 border-black absolute hover:cursor-pointer active:scale-95 bg-white p-2"
      >
        <BsChevronCompactLeft size={30} />
      </button>
      <button
        onClick={() => handleClick("right")}
        className="border-2 border-black absolute right-4 hover:cursor-pointer active:scale-95 bg-white  p-2"
      >
        <BsChevronCompactRight size={30} />
      </button>
    </div>
  );
};

/* <div
        style={{ backgroundImage: `url(${images[0]})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div> */
