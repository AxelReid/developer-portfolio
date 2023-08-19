import type { NextPage } from "next";
import DashboardWrapper from "@components/Dashboard/DashboardWrapper";
import Tags from "@components/Dashboard/Tags";
import { api } from "@utils/api";
import CreateProjectModal from "@components/Modal/CreateProjectModal";
import { useRef } from "react";
import type { ModalMutableRefProps } from "src/types/modalRef";
import Projects from "@components/Dashboard/Projects";
import type { ProjectType } from "src/types/infer";
import TitleWithBtn from "@components/TitleWithBtn";

const ManageProjects: NextPage = () => {
  const modalRef: ModalMutableRefProps<ProjectType> = useRef(null);
  const projects = api.project.getAll.useQuery({ includeUnPublished: true });
  const tags = api.tags.getAll.useQuery();

  return (
    <>
      <DashboardWrapper>
        <section className="space-y-7">
          <div className="br border-0 border-b pb-10">
            <TitleWithBtn
              btnTitle="Add a project"
              title="Manage projects"
              count={projects.data?.length ?? 0}
              click={() => modalRef.current?.open(undefined)}
            />
            <Projects
              projects={projects.data}
              openEdit={modalRef.current?.open}
            />
          </div>
          <div>
            <h1 className="mb-4 text-xl">
              Manage tags
              <span className="ml-2 text-sm">({tags.data?.length ?? 0})</span>
            </h1>
            <Tags tags={tags.data} refetch={tags.refetch as () => void} />
          </div>
        </section>
      </DashboardWrapper>
      <CreateProjectModal ref={modalRef} tags={tags} />
    </>
  );
};

export default ManageProjects;
