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
        className="mt-14 grid
      grid-cols-1 gap-5 sm:grid-cols-2
      lg:grid-cols-3 xl:gap-10"
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
