"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

  const navLinksEl = navLinks?.map((navlink) => {
    const selectedLinkClass = clsx({
      "border-b-2 border-black": pathname === navlink.path,
      "flex":true,
      "items-center":true
    });

    return (
      <Link
        className={selectedLinkClass}
        key={navlink.title}
        href={navlink.path}
      >
        {navlink.title}
      </Link>
    );
  });

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen no-scrollbar">
        <nav className="flex justify-between gap-8 py-4 px-12 text-xl w-full border-2 border-black bg-white">
          <h1>Benjamin Riderelli</h1>
          <div className="flex gap-8">{navLinksEl}</div>
        </nav>
        <main
        className="grow lg:h-[calc(100vh-12rem)] w-full">{children}</main>
      </body>
    </html>
  );
}
