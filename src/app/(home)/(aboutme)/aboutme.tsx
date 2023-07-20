"use client";
import { useState } from "react";
import "./aboutme.css";
import reactLogo from "../../../../public/assets/React-icon.svg.png";
import tailWindLogo from "../../../../public/assets/Tailwind_CSS_Logo.svg.png";
import nextLogo from "../../../../public/assets/nextlogo.png";
import cssLogo from "../../../../public/assets/csslogo.png";
import jsLogo from "../../../../public/assets/jslogo.png";
import tsLogo from "../../../../public/assets/Typescript_logo.png";
import ghLogo from "../../../../public/assets/GitHub-Mark.png";
import vsLogo from "../../../../public/assets/Visual_Studio_Code_1.35_icon.png";
import dockerLogo from "../../../../public/assets/dockerLogo.png";
import mongoLogo from "../../../../public/assets/mongologo.jpg";
import nodejsLogo from "../../../../public/assets/nodejslogo.png";
import expressLogo from "../../../../public/assets/expresslogo.jpg";

import Image from "next/image";

interface ReflectionState {
  [key: string]: boolean;
}

export default function AboutMe() {
  const [reflectionState, setReflectionState] = useState<ReflectionState>({
    isActive: true,
    identity: false,
    chops: false,
    groove: false,
    base: false,
  });
  const [identity, setIdentity] = useState("");
  const [chops, setChops] = useState(["", ""]);
  const [groove, setGroove] = useState(["", ""]);
  const [base, setBase] = useState("");

  const handleClick = (state: string) => {
    setReflectionState((prevState:ReflectionState) => {
      const updatedState = Object.keys(prevState).reduce((acc, key) => {
        if (key === state) {
          acc[key] = true;
        } else {
          acc[key] = false;
        }
        return acc;
      }, {} as ReflectionState);

      return updatedState;
    });
  };

  return (
    <section className="flex flex-wrap-reverse w-full lg:h-screen border-2  border-black bg-white">
      <div className="flex  flex-col gap-12  w-full lg:w-1/2 p-9 pt-20 border-2 border-black">
        <h1 className="text-6xl tracking-tighter">
          <span className="font-semibold">About</span> me
        </h1>
        <div className="flex flex-col  gap-2">
          {reflectionState.isActive && (
            <p className="text-2xl  leading-8 tracking-wide">
              One of my biggest passions in life besides technology is music,
              and being always in the middle of both worlds has given me some
              thoughts that might be fun to share.
            </p>
          )}
          {reflectionState.identity && (
            <div className="flex flex-col">
              <div>
                <p className="text-2xl  leading-8 tracking-wide">
                  Think about how a captivating musical hook instantly grabs
                  your attention.
                </p>
                <p className="text-2xl  leading-8 tracking-wide"></p>
              </div>
              <div className="flex gap-8 justify-center pt-14">
                <Image
                  src={cssLogo}
                  alt="css-logo"
                  className="w-28 md:w-48 object-scale-down"
                />
                <Image
                  src={tailWindLogo}
                  alt="tailwind-logo"
                  className="w-28 md:w-48 object-scale-down"
                />
                <Image
                  src={jsLogo}
                  alt="js-logo"
                  className="w-28 md:w-48 object-scale-down"
                />
              </div>
            </div>
          )}
          {reflectionState.chops && (
            <div className="flex flex-col items-center gap-8">
              <p className="text-2xl  leading-8 tracking-wide">
                Consider how a skilled musician impresses the audience with his
                or her technical proficiency on an instrument. Similarly, the
                performance of an application refers to its ability to function
                smoothly, swiftly, and responsively. Just as a musician's chops
                leave audiences in awe, an application that demonstrates strong
                performance capabilities leaves users impressed. It involves
                minimizing issues such as lag, crashes, and slowdowns. A
                well-performing application ensures a seamless user experience,
                where operations flow effortlessly. Reflecting on this parallel,
                its easy to appreciate how performance, like musical chops,
                contributes to an application's effectiveness and user
                satisfaction.
              </p>
              <div className="flex gap-8 pb-4">
                <Image
                  src={reactLogo}
                  alt="react-logo"
                  className="w-48 object-scale-down"
                />
                <Image
                  src={tsLogo}
                  alt="ts-logo"
                  className="w-48 object-scale-down"
                />
                <Image
                  src={nextLogo}
                  alt="next-logo"
                  className="w-48 object-scale-down"
                />
              </div>
            </div>
          )}
          {groove[0] === "animated-text" && (
            <div className="flex flex-col items-center gap-8">
              <p className="text-2xl  leading-8 tracking-wide">
                Alright, this is a good one. You know when a band is jamming
                together, and everything just clicks? That's what I call a
                groovy flow. Similarly, in the realm of software development, a
                good usage of tools like GitHub, VS code, and Docker along with
                solid team communication creates a similar vibe. Software
                development It's all about that seamless collaboration, where
                everyone is on the same page, sharing code, resolving conflicts,
                and keeping things organized. Just like musicians groove
                together, developers find their rhythm by utilizing these tools,
                finding new ones and maintaining effective communication. This
                leads to a harmonious workflow, boosting productivity and
                creating awesome software.
              </p>
              <div className="flex gap-8 pb-4">
                <Image
                  src={ghLogo}
                  alt="github-logo"
                  className="w-56 object-scale-down"
                />
                <Image
                  src={vsLogo}
                  alt="visual-studio-code-logo"
                  className="w-48 object-scale-down"
                />
                <Image
                  src={dockerLogo}
                  alt="docker-logo"
                  className="w-60 object-scale-down"
                />
              </div>
            </div>
          )}
          {base === "solid-base" && (
            <div className="flex flex-col items-center gap-8">
              <p className="text-2xl  leading-8 tracking-wide">
                In music, a solid base is the backbone of any great composition,
                providing stability and setting the rhythm. Likewise, MongoDB,
                Express, and Node.js form the core foundation of many modern web
                applications. Just as a solid musical base sets the stage for
                the rest of the instruments to shine, the strategic use of
                MongoDB, Express, and Node.js provides a robust foundation for
                building dynamic and scalable web applications, ensuring a
                harmonious and successful development process.
              </p>
              <div className="flex gap-8 pb-4">
                <Image
                  src={mongoLogo}
                  alt="mongodb-logo"
                  className="w-60 object-scale-down"
                />
                <Image
                  src={nodejsLogo}
                  alt="nodejs-logo"
                  className="w-52 object-scale-down"
                />
                <Image
                  src={expressLogo}
                  alt="exppress-logo"
                  className="w-52 object-scale-down"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className={`flex flex-col gap-12  w-full lg:w-1/2 p-9 pt-20 border-2 border-black`}
      >
        <div
          // onMouseEnter={() => {
          //   setIdentity("text_shadows");
          // }}
          // onMouseLeave={() => {
          //   setIdentity("");
          // }}
          onClick={(e) => {
            handleClick("identity")
          }}
          className="flex justify-center items-center border-2 border-black h-1/4 hover:cursor-pointer"
        >
          <h2 className={`md:text-6xl lg:text-8xl font-bold ${identity}`}>
            Identity
          </h2>
        </div>
        <div
          onClick={()=>{
            handleClick("chops")
          }}
          // onClick={() => {
          //   setChops(["classy-chops", "classy-container"]);
          //   setIdentity("");
          // }}
          // onMouseLeave={() => {
          //   setChops(["", ""]);
          // }}
          className={`flex justify-center items-center border-2 border-black h-1/4 hover:cursor-pointer ${chops[1]}`}
        >
          <h2
            className={`md:text-6xl lg:text-8xl font-bold tracking-tighter ${chops[0]}`}
          >
            Classy chops
          </h2>
        </div>
        <div
          onClick={() => {
            setGroove(["animated-text", "content"]);
          }}
          // onMouseLeave={() => {
          //   setGroove(["", ""]);
          // }}
          className={`flex justify-center items-center border-2 border-black h-1/4 hover:cursor-pointer ${groove[1]}`}
        >
          {groove[1] && (
            <h2
              className={`sm:text-xl md:text-xl lg:text-7xl font-bold tracking-tighter ${groove[0]}`}
            >
              Groovie flow
            </h2>
          )}
          <h2
            className={`sm:text-xl md:text-xl lg:text-8xl font-bold tracking-tighter ${groove[0]}`}
          >
            Groovie flow
          </h2>
        </div>
        <div
          onClick={() => {
            setBase("solid-base");
          }}
          // onMouseLeave={() => {
          //   setBase("");
          // }}
          className="flex justify-center items-center border-2 border-black h-1/4 hover:cursor-pointer"
        >
          <h2
            className={`md:text-6xl lg:text-8xl font-bold border-b-8 border-white ${base}`}
          >
            Solid Base
          </h2>
        </div>
      </div>
    </section>
  );
}
