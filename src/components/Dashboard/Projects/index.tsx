import type { ProjectsGetAll, ProjectType } from "src/types/infer";
import Project from "./Project";

interface Props {
  projects?: ProjectsGetAll;
  openEdit?: (arg: ProjectType) => void;
}

const Projects: React.FC<Props> = ({ projects, openEdit }) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 rounded-lg lg:grid-cols-2 xl:grid-cols-3">
      {projects?.map((p) => (
        <Project
          key={p.id}
          {...p}
          openEdit={() => (openEdit ? openEdit(p) : {})}
        />
      ))}
    </div>
  );
};

export default Projects;
