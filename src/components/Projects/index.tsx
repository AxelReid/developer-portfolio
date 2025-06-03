import Title from "@components/Title";
import { api } from "@utils/api";
import { handleHoverEffect } from "@utils/hoverCardEffect";
import Project from "./Project";

const Projects = () => {
  const projects = api.project.getAll.useQuery();

  return (
    <section id="projects" className="sTo">
      <Title title="Projects" desc="Some projects" />

      <div
        id="hover-cards"
        onMouseMove={handleHoverEffect}
        className="content container  columns-2 [column-gap:0.75rem] md:columns-3"
      >
        {projects.data?.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
