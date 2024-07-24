"use client";
import Link from "next/link";
import { Header } from "../components/header";

const projects = [
  {
    title: "NetGuardian",
    description: "Network Security Solution - Engineered a network security solution that reduced breaches by 40%, using Java and Flask to build a real-time security system.",
    url: "https://example.com/netguardian",
    repository: "jeet-dekivadia/netguardian",
    views: 1200,
  },
  {
    title: "PirateX",
    description: "Anti-Piracy Ethical Hacking - Reduced piracy rates by 35% with an anti-piracy solution using ethical hacking techniques, enhancing system security.",
    url: "https://example.com/piratex",
    repository: "jeet-dekivadia/piratex",
    views: 800,
  },
  {
    title: "NeoLearn",
    description: "AI-based Smart Education - Created an AI-based educational platform with TensorFlow and React, improving learning outcomes by 20%.",
    url: "https://example.com/neolearn",
    repository: "jeet-dekivadia/neolearn",
    views: 1500,
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-gradient-to-tl from-black via-zinc-900 to-black">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Projects</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Header
              key={index}
              project={project}
              views={project.views}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
