import React from "react";
import Link from "next/link";

interface Props{

}

const NotFound = ({}: Props) => {
  return (
    <section className="flex justify-center items-center w-full h-full bg-light-bg-color dark:bg-dark-bg-color">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-light-text-color dark:dark-text-color ">
          404 - not found x_x
        </h1>
        <Link
          className="text-center border border-light-text-color dark:border-dark-text-color p-8 active:scale-95"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
