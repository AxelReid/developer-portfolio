import { handleHoverEffect } from "@utils/hoverCardEffect";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { forwardRef, useImperativeHandle, useState } from "react";
import overlay from "./overlay";

type Div = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
interface Props extends Div {
  onClose?: () => void;
  root?: Div;
}

const Modal = (
  { children, onClose = () => null, className = "", root = {}, ...rest }: Props,
  ref: React.Ref<unknown> | null
) => {
  const { className: rootClassName = "", ...rootRestProps } = root;
  const [isOpened, setOpened] = useState(false);

  const bodyScroll = (open: boolean) => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };
  const open = () => {
    setOpened(true);
    bodyScroll(true);
  };
  const close = () => {
    bodyScroll(false);
    onClose();
    setOpened(false);
  };

  useImperativeHandle(ref, () => ({
    open,
    close,
    opened: isOpened,
  }));

  if (!isOpened) return null;

  return (
    <div
      onMouseMove={handleHoverEffect}
      id="hover-cards"
      {...rootRestProps}
      className={`fixed inset-0 isolate !z-50 overflow-y-auto px-4 pt-20 pb-10 md:pt-24 ${rootClassName}`}
    >
      <div onClick={close}>{overlay}</div>
      <div
        {...rest}
        id="hover-card"
        className={`b relative mx-auto max-w-screen-md rounded-2xl p-10 ${className}`}
      >
        <span id="hover-card-overlay" />
        {children}
      </div>
    </div>
  );
};

export default forwardRef(Modal);
