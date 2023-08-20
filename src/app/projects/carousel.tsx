"use client";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselProps {
  images: any[];
}

export const CustomCarousel = ({ images }: CarouselProps) => {
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
    <div className="flex items-center relative  w-full h-screen lg:h-full py-16 px-4">
      <Carousel>
        {images.map((image) => {
          return (
            <div>
              <img src={image} />
            </div>
          );
        })}
      </Carousel>

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
