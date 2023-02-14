"use client";

import { handleHoverEffect } from "@utils/hoverCardEffect";
import React, { memo, useState } from "react";
import type { ProjectType } from "src/types/project";
import Project from "./Project";

const tabs = [
  { name: "All", value: null },
  { name: "Front end", value: "frontend" },
  { name: "Back end", value: "backend" },
  { name: "Full stack", value: "fullstack" },
];

const projects: ProjectType[] = [
  {
    title: "Fullstack e-commerce",
    link: "",
    tags: [
      "react.js",
      "next.js",
      "mantine.dev",
      "typescript",
      "nest.js",
      "typeorm",
      "postgres",
      "graphql apollo",
      "stripe",
      "redis",
      "ws",
    ],
    thumbnail: "",
  },
  {
    title: "Fullstack blogs",
    link: "",
    tags: [
      "react.js",
      "next.js",
      "next-auth",
      "typescript",
      "prisma",
      "sqlite",
      "trpc",
      "mantine.dev",
    ],
    thumbnail: "",
  },
  {
    title: "Personal portfolio",
    link: "",
    tags: [
      "react.js",
      "next.js 13",
      "next-auth",
      "typescript",
      "prisma",
      "mongodb",
      "tailwind css",
    ],
    thumbnail: "",
  },
];

interface Props {
  projects: ProjectType[];
}
const Projects: React.FC<Props> = memo(() => {
  // const { data } = api.project.getAll.useQuery();
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-y-4 gap-x-5 font-medium">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(tab.value)}
            className={`btn ${
              tab.value === activeTab ? "btn-darker" : ""
            } py-2 px-4`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div
        id="hover-cards"
        onMouseMove={handleHoverEffect}
        className="mt-14 grid
      grid-cols-1 gap-5 sm:grid-cols-2
      lg:grid-cols-3 xl:gap-10"
      >
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </>
  );
});

Projects.displayName = "Projects";
export default Projects;
