import { DiscordSvg, GithubSvg, googleSvg, RedditSvg } from "@components/icons";
import { handleHoverEffect } from "@utils/hoverCardEffect";
import { forwardRef, useImperativeHandle, useRef } from "react";
import type { ModalMutableRefProps } from "src/types/modalRef";
import Modal from "..";

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
      <h1 className="text-xl font-medium">Login</h1>
      <div className="mt-10 flex flex-col gap-4">
        <button className="btn btn-light px-4 py-2.5 text-left font-semibold">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6">{googleSvg}</div>
            <span>Continue with Google</span>
          </div>
        </button>
        <button className="btn btn-dark px-4 py-3 text-left font-semibold">
          <div className="flex items-center gap-3">
            <GithubSvg className="h-6 w-6 rounded-full invert " />
            <span className="!text-white">Continue with Github</span>
          </div>
        </button>
        <button className="btn btn-dark !bg-[#00acee] px-4 py-2.5 text-left font-semibold">
          <div className="flex items-center gap-3">
            <RedditSvg className="h-6 w-6 !fill-white" />
            <span className="!text-white">Continue with Twitter</span>
          </div>
        </button>
        <button className="btn btn-dark !bg-[#7289da] px-4 py-2.5 text-left font-semibold">
          <div className="flex items-center gap-3">
            <DiscordSvg className="h-6 w-6 !fill-white" />
            <span className="!text-white">Continue with Discord</span>
          </div>
        </button>
      </div>
    </Modal>
  );
};

export default forwardRef(AuthModal);
