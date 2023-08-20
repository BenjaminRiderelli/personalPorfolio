import React from "react";

interface CarouselProps {
  children: React.ReactNode;
}

const CustomCarousel = ({ children }: CarouselProps) => {
  return (
    <div className="h-full overflow-hidden relative">
      <div className="flex h-full"> {children}</div>
      <div></div>
    </div>
  );
};

export default CustomCarousel;
