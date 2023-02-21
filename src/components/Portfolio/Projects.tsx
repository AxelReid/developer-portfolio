import { api } from "@utils/api";
import { handleHoverEffect } from "@utils/hoverCardEffect";
import React, { memo, useState } from "react";
import Project from "./Project";

const Projects = memo(() => {
  const categories = api.category.getAll.useQuery();
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const projects = api.project.getAll.useQuery({
    categoryId: activeTab || undefined,
  });

  return (
    <>
      <div className="flex flex-wrap justify-center gap-y-4 gap-x-5 font-medium">
        {[
          {
            id: null,
            name: "All",
            _count: { projects: null },
          },
          ...(categories.data || []),
        ]?.map((tab, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveTab(tab.id);
            }}
            className={`btn ${
              tab.id === activeTab ? "btn-darker" : ""
            } py-2 px-4`}
          >
            {tab.name}
            {typeof tab._count.projects === "number" && (
              <span className="ml-1">({tab._count.projects})</span>
            )}
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
        {projects.data?.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </>
  );
});

Projects.displayName = "Projects";
export default Projects;
