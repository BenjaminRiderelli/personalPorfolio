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
    setReflectionState((prevState: ReflectionState) => {
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
    <section className="flex flex-wrap w-full min-h-screen border-2 border-t-0 border-b-0  border-black bg-white">
      <div className="flex  min-h-screen flex-col gap-12  w-full lg:w-1/2 p-9 pt-20 black">
        <h1 className="text-6xl tracking-tighter">
          <span className="font-semibold">About</span> me
        </h1>
        <div className="flex flex-col h-full gap-2">
          <p className={`text-lg md:text-2xl  leading-8 tracking-wide `}>
            One of my biggest passions in life besides technology is music, and
            being always in the middle of both worlds has given me some thoughts
            that might be fun to share...
          </p>

          {reflectionState.identity && (
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-lg md:text-2xl  leading-8 tracking-wide ">
                  Just like a killer tune hooks you in, a well-designed UI grabs
                  user's attention and gets them captivated by the application.
                  It's all about that initial wow factor, smooth navigation, and
                  cool visuals. When you think about it, UI acts just like
                  musical hooks – keeping users engaged and entertained
                  throughout their journey with the app or song. It's all about
                  creating that enjoyable and memorable experience that keeps
                  them coming back for more!
                </p>
                <p className="text-2xl  leading-8 tracking-wide"></p>
              </div>
              <div className="flex gap-8 justify-center pt-14">
                <Image
                  src={cssLogo}
                  alt="css-logo"
                  className="w-20 md:w-36 object-scale-down"
                />
                <Image
                  src={tailWindLogo}
                  alt="tailwind-logo"
                  className="w-20 md:w-36 object-scale-down"
                />
                <Image
                  src={jsLogo}
                  alt="js-logo"
                  className="w-20 md:w-36 object-scale-down"
                />
              </div>
            </div>
          )}
          {reflectionState.chops && (
            <div className="flex flex-col items-center justify-between h-full gap-4">
              <p className="text-lg md:text-2xl leading-8 tracking-wide">
                Consider how a skilled musician impresses the audience with his
                or her technical proficiency on an instrument. Similarly, the
                performance of an application refers to its ability to function
                smoothly, swiftly, and responsively. Just as a musician's chops
                leave audiences in awe, an application that demonstrates strong
                performance capabilities leaves users impressed. It involves
                minimizing issues such as lag, crashes, and slowdowns. A
                well-performing application ensures a seamless user experience,
                where operations flow effortlessly.
              </p>
              <div className="flex gap-8 pb-4">
                <Image
                  src={reactLogo}
                  alt="react-logo"
                  className="w-20 md:w-36 object-scale-down"
                />
                <Image
                  src={tsLogo}
                  alt="ts-logo"
                  className="w-20 md:w-36 object-scale-down"
                />
                <Image
                  src={nextLogo}
                  alt="next-logo"
                  className="w-20 md:w-36 object-scale-down"
                />
              </div>
            </div>
          )}
          {reflectionState.groove && (
            <div className="flex flex-col items-center justify-between h-full gap-4">
              <p className="text-lg  md:text-2xl  leading-8 tracking-wide">
                You know when a band is jamming together, and everything just
                clicks? That's what I call a groovy flow. In the realm of
                software development, a good usage of tools like GitHub, VS
                code, and Docker along with solid team communication creates a
                similar vibe. Software development It's all about that seamless
                collaboration, where everyone is on the same page, sharing code,
                resolving conflicts, and keeping things organized. Just like
                musicians groove together, developers find their rhythm by
                utilizing these tools, finding new ones and maintaining
                effective communication.
              </p>
              <div className="flex gap-8 pb-4">
                <Image
                  src={ghLogo}
                  alt="github-logo"
                  className="w-20 md:w-36 object-scale-down"
                />
                <Image
                  src={vsLogo}
                  alt="visual-studio-code-logo"
                  className="w-20 md:w-36 object-scale-down"
                />
                <Image
                  src={dockerLogo}
                  alt="docker-logo"
                  className="w-20 md:w-36 object-scale-down"
                />
              </div>
            </div>
          )}
          {reflectionState.base && (
            <div className="flex flex-col items-center justify-between h-full gap-4">
              <p className="text-lg md:text-2xl leading-8 tracking-wide">
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
                  className="w-20 md:w-36 object-scale-down"
                />
                <Image
                  src={nodejsLogo}
                  alt="nodejs-logo"
                  className="w-20 md:w-36 object-scale-down"
                />
                <Image
                  src={expressLogo}
                  alt="exppress-logo"
                  className="w-20 md:w-36 object-scale-down"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className={`border-2 lg:border-b-0 lg:border-t-0 lg:border-l-2 border-black flex flex-col gap-12  w-full lg:w-1/2 p-9 pt-12 `}
      >
        <div
          onClick={(e) => {
            handleClick("identity");
            setIdentity("text_shadows");
          }}
          className="flex justify-center items-center border-2 border-black h-1/4 hover:cursor-pointer"
        >
          <h2
            className={`text-3xl md:text-6xl lg:text-8xl font-bold ${
              reflectionState.identity ? identity : ""
            }`}
          >
            Identity
          </h2>
        </div>
        <div
          onClick={() => {
            handleClick("chops");
            setChops(["classy-chops", "classy-container"]);
          }}
          className={`flex justify-center items-center border-2 border-black h-1/4 hover:cursor-pointer ${
            reflectionState.chops ? chops[1] : ""
          }`}
        >
          <h2
            className={`text-3xl md:text-6xl lg:text-8xl font-bold tracking-tighter ${
              reflectionState.chops ? chops[0] : ""
            }`}
          >
            Classy chops
          </h2>
        </div>
        <div
          onClick={() => {
            setGroove(["animated-text", "content"]);
            handleClick("groove");
          }}
          className={`flex justify-center items-center border-2 border-black h-1/4 hover:cursor-pointer`}
        >
          <h2
            className={`text-3xl md:text-6xl lg:text-8xl  font-bold tracking-tighter ${
              reflectionState.groove ? "animate-character" : ""
            }`}
          >
            Groovie flow
          </h2>
        </div>
        <div
          onClick={() => {
            handleClick("base");
            setBase("solid-base");
          }}
          className="flex justify-center items-center border-2 border-black h-1/4 hover:cursor-pointer"
        >
          <h2
            className={` text-3xl md:text-6xl lg:text-8xl font-bold border-b-8 border-white ${
              reflectionState.base ? base : ""
            }`}
          >
            Solid Base
          </h2>
        </div>
      </div>
    </section>
  );
}
