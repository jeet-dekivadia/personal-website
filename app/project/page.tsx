"use client";
import { GitHub } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

// Projects data
const projects = [
	{
		title: "NetGuardian - Network Security Solution",
		description: "Developed for the ACUITY 2023 NetSec Challenge.",
		link: "https://github.com/jeet-dekivadia/netguardian", // Replace with your actual project link
	},
	{
		title: "PirateX - Anti-Piracy Ethical Hacking",
		description: "Created for the STAI 2023 HackwithEthics competition.",
		link: "https://github.com/jeet-dekivadia/piratex", // Replace with your actual project link
	},
	{
		title: "NeoLearn - AI-based Smart Education",
		description: "Developed for The New York Academy of Sciences.",
		link: "https://github.com/jeet-dekivadia/neolearn", // Replace with your actual project link
	},
];

export default function Projects() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-1 lg:gap-16">
					{projects.map((project) => (
						<Card key={project.title}>
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
									<GitHub size={20} />
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{project.title}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{project.description}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
