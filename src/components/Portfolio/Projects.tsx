import { api } from "@utils/api";
import { handleHoverEffect } from "@utils/hoverCardEffect";
import React, { memo } from "react";
import Project from "./Project";

const Projects = memo(() => {
  const projects = api.project.getAll.useQuery();

  return (
    <>
      <div
        id="hover-cards"
        onMouseMove={handleHoverEffect}
        className="container mt-14 grid max-w-[1800px]
        grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3
        xl:grid-cols-4"
      >
        {projects.data?.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </>
  );
});

Projects.displayName = "Projects";
export default Projects;
