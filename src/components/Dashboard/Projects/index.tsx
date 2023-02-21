import type { ProjectsGetAll } from "src/types/infer";
import Project from "./Project";

interface Props {
  projects?: ProjectsGetAll;
}

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 rounded-lg lg:grid-cols-2 xl:grid-cols-3">
      {projects?.map((p) => (
        <Project key={p.id} {...p} />
      ))}
    </div>
  );
};

export default Projects;
