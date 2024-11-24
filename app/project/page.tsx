"use client";
import { Github } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { useState } from "react";
import "/global.css";

const projects = [
  {
    title: "SurgeVue - Neurosurgeries made safe!",
    description:
      "Awarded 2 prizes at PennApps XXV. Augment Reality specially designed for professional surgeons and medical students to make their process of performing the surgery much more efficient.",
    link: "https://github.com/jeet-dekivadia/SurgeVue",
  },
  {
    title: "Pantry Tracker - Anti-Piracy Ethical Hacking",
    description:
      "A pantry management application using Next.js, React, Material UI, and Firebase",
    link: "https://github.com/jeet-dekivadia/pantry-tracker",
  },
  {
    title: "Trash2Treasure",
    description:
      "Developed solo at HackGT 11. A gamified recycling app that turns reducing waste into rewards and tracks your impact as you compete for a greener world.",
    link: "https://github.com/jeet-dekivadia/trash2treasure-website",
  },
];

export default function Projects() {
  const [flipped, setFlipped] = useState<string | null>(null);

  const toggleFlip = (title: string) => {
    setFlipped(flipped === title ? null : title);
  };

  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-1 lg:gap-16">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`flip-card ${flipped === project.title ? "flipped" : ""}`}
              onClick={() => toggleFlip(project.title)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front sparkle">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
                  >
                    <span
                      className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                      aria-hidden="true"
                    />
                    <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                      <Github size={20} />
                    </span>
                    <div className="z-10 flex flex-col items-center">
                      <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                        {project.title}
                      </span>
                      <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        {project.description}
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="flip-card-back">
                  <div className="p-4 flex flex-col items-center gap-4 md:gap-8 md:py-24 lg:pb-48 md:p-16">
                    <span className="lg:text-xl font-medium xl:text-3xl text-zinc-200 font-display">
                      {project.title}
                    </span>
                    <span className="mt-4 text-sm text-center text-zinc-400">
                      {project.description}
                    </span>
                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
