import { handleHoverEffect } from "@utils/hoverCardEffect";
import { forwardRef, useImperativeHandle, useRef } from "react";
import type { ModalMutableRefProps } from "src/types/modalRef";
import Modal from "..";
import Content from "./Content";

const AuthModal = ({}, ref: React.Ref<unknown>) => {
  const modalRef: ModalMutableRefProps = useRef(null);

  useImperativeHandle(ref, () => ({
    open: () => modalRef.current?.open(),
  }));

  return (
    <Modal
      root={{ onMouseMove: handleHoverEffect, id: "hover-cards" }}
      ref={modalRef}
      id="hover-card"
      className="h-auto max-w-[400px] "
    >
      <span id="hover-card-overlay" />
      <Content />
    </Modal>
  );
};

export default forwardRef(AuthModal);
