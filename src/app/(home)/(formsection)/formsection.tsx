"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./formsection.module.css";

const FormSection = () => {
  // const ref = useRef<HTMLDivElement | null>(null);
  // const [rocketIsVisible, setRocketIsVisible] = useState<Boolean>(false);

  const { ref, inView: rocketIsVisible } = useInView();

  return (
    <section className="flex flex-wrap-reverse gap-4 py-8 justify-center items-center min-h-screen bg-white border-2 border-black">
      <div className="w-3/4 h-[500px] md:w-1/2 md:min-h-[600px] border-2 border-black">
        <form className={`flex w-full h-full`}>
          <p ref={ref} className="">
            <span
              className={`${styles.rocket} ${
                rocketIsVisible ? styles.animateRocket : ""
              }`}
            >
              🚀
            </span>
          </p>
        </form>
      </div>
      <div className="flex flex-col gap-4 w-3/4  justify-center md:w-1/3 md:min-h-[600px]">
              <h1 className="text-4xl font-extrabold">Impressed by the flying rocket?</h1>
              <p className="text-xl">Hit me up with a message 😁</p>
      </div>
    </section>
  );
};

export default FormSection;
