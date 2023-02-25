import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import type { ProjectType } from "src/types/infer";
import type { ModalMutableRefProps } from "src/types/modalRef";
import Modal from "..";
import type { CreateProjectProps } from "./Content";
import Content from "./Content";

type Props = CreateProjectProps;

const CreateProjectModal = (
  { categories, tags }: Props,
  ref: React.Ref<unknown>
) => {
  const modalRef: ModalMutableRefProps = useRef(null);
  const [edit, setEdit] = useState<ProjectType | undefined>(undefined);

  useImperativeHandle(ref, () => ({
    open: (project?: ProjectType) => {
      if (project) setEdit(project);
      else if (edit) setEdit(undefined);
      modalRef.current?.open();
    },
  }));

  return (
    <Modal ref={modalRef} className="max-w-[550px]">
      <Content
        categories={categories}
        tags={tags}
        close={() => modalRef.current?.close()}
        edit={edit}
      />
    </Modal>
  );
};

export default forwardRef(CreateProjectModal);
