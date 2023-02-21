import { forwardRef, useImperativeHandle, useRef } from "react";
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

  useImperativeHandle(ref, () => ({
    open: () => modalRef.current?.open(),
  }));

  return (
    <Modal ref={modalRef} className="max-w-[550px]">
      <Content
        categories={categories}
        tags={tags}
        close={() => modalRef.current?.close()}
      />
    </Modal>
  );
};

export default forwardRef(CreateProjectModal);
