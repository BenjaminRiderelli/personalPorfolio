"use client";
import "./globals.css";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import Toggler from "../components/inputs/toggler";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Projects", path: "/projects" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [lightModeIsChecked, setLightModeIsChecked] = useState(true);
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const lightModeFromStorage = localStorage.getItem("lightMode");
      const parsedLightMode = lightModeFromStorage
        ? JSON.parse(lightModeFromStorage)
        : true;
      setLightModeIsChecked(parsedLightMode);
    }
  }, []);

  const handleChange = () => {
    localStorage.setItem("lightMode", JSON.stringify(!lightModeIsChecked));
    setLightModeIsChecked(!lightModeIsChecked);
  };

  const toggleNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  const navLinksEl = navLinks?.map((navlink) => {
    const selectedLinkClass = clsx({
      "border-b-2 border-black dark:border-dark-text-color":
        pathname === navlink.path,
      flex: true,
      "items-center": true,
    });
    return (
      <Link
        onClick={() => {
          setTimeout(() => setShowNavBar(false), 500);
        }}
        className={selectedLinkClass}
        key={navlink.title}
        href={navlink.path}
      >
        {navlink.title}
      </Link>
    );
  });

  return (
    <html lang="en" className={lightModeIsChecked ? "light" : "dark"}>
      <head>
        <title>Benjamin Riderelli</title>
      </head>
      <body
        className={`relative flex flex-col min-h-screen no-scrollbar ${
          showNavBar ? "overflow-hidden" : ""
        }`}
      >
        <nav className="flex justify-between gap-8 py-4 px-8 md:px-12 text-xl w-full border-2 border-black bg-light-bg-color dark:text-dark-text-color dark:bg-dark-bg-color dark:border-dark-text-color">
          <h1>Benjamin Riderelli</h1>
          <div className="text-2xl md:hidden">
            <AiOutlineMenu 
            className="cursor-pointer"
            onClick={toggleNavBar} />
          </div>
          <div className="hidden md:flex gap-8 items-center">
            {navLinksEl}
            <Toggler
              handleChange={handleChange}
              isChecked={lightModeIsChecked}
            />
          </div>
        </nav>

        <main className="grow lg:h-[calc(100vh-12rem)] w-full">
          {children}

          {showNavBar && (
            <div className="w-screen min-h-screen h-full text-light-text-color dark:text-dark-text-color bg-light-bg-color dark:bg-dark-bg-color absolute top-0 z-100">
              <div className="flex justify-end p-4 w-full">
                <AiOutlineCloseCircle
                  onClick={toggleNavBar}
                  className="text-4xl cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-16 py-32 items-center w-full h-full text-2xl">
                {navLinksEl}
                <Toggler
                  handleChange={handleChange}
                  isChecked={lightModeIsChecked}
                />
              </div>
            </div>
          )}
        </main>
      </body>
    </html>
  );
}
