import { useRouter } from "next/router";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import type { ModalMutableRefProps } from "src/types/modalRef";
import Modal from "..";
import Content from "./Content";

const AuthModal = ({}, ref: React.Ref<unknown>) => {
  const modalRef: ModalMutableRefProps = useRef(null);
  const router = useRouter();
  const { query, pathname } = router;

  useEffect(() => {
    if (query?.authTo) {
      modalRef.current?.open();
    }
  }, [query]);

  const clearQuery = useCallback(() => {
    delete query?.authTo;
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push({ pathname, query });
  }, [pathname, query, router]);

  useImperativeHandle(ref, () => ({
    open: () => modalRef.current?.open(),
  }));

  return (
    <Modal
      onClose={clearQuery}
      ref={modalRef}
      className="h-auto max-w-[400px] "
    >
      <Content clearQuery={clearQuery} />
    </Modal>
  );
};

export default forwardRef(AuthModal);
