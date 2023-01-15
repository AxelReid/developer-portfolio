import { forwardRef, useImperativeHandle, useState } from "react";
import overlay from "./overlay";

interface Props {
  children: React.ReactNode | string;
  onClose?: () => void;
  className?: string;
}

const Modal = (
  { children, onClose = () => null, className = "" }: Props,
  ref: React.Ref<unknown> | null
) => {
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
    <div className="fixed inset-0 isolate z-50 h-screen overflow-y-auto px-4 pt-20 pb-10 md:pt-24">
      <div onClick={close}>{overlay}</div>
      <section
        className={`b mx-auto h-[50vh] max-w-screen-md rounded-2xl p-10 ${className}`}
      >
        {children}
      </section>
    </div>
  );
};

export default forwardRef(Modal);
