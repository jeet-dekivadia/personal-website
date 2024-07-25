import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Project", href: "/project" },
  { name: "Resume", href: "/AugustResume.pdf" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-white bg-zinc-700 rounded hover:bg-zinc-500"
              target={item.name === "Resume" ? "_blank" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Jeet Dekivadia
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-lg text-zinc-500 ">
          Computer Science freshman at Georgia Tech
        </h2>
        <h2 className="text-lg text-zinc-500 ">
          Actively looking for SWE Internships for Summer 2025
        </h2>
      </div>
      <img src="/pp 2024 a.jpg" alt="Jeet Dekivadia" className="profile-photo" />
    </div>
  );
}
