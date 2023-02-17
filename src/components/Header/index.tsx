"use client";

import AuthModal from "@components/Modal/AuthModal";
import ThemeSwitcher from "@components/ThemeSwitcher";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { menus } from "@static/links";
import { useSession } from "next-auth/react";
import Link from "next/link";
import type { LegacyRef } from "react";
import { memo, useMemo, useRef, useState } from "react";
import type { ModalMutableRefProps } from "src/types/modalRef";

const Header = () => {
  const { data: session, status } = useSession();

  const modalRef: ModalMutableRefProps = useRef(null);
  const animatedBgRef: LegacyRef<HTMLSpanElement> = useRef(null);
  const ref: LegacyRef<HTMLUListElement> | null = useRef(null);
  const [open, setOpen] = useState(false);

  const h = useMemo(
    () => ref.current?.getBoundingClientRect()?.height,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [open, ref]
  );

  const handleOpen = (b?: boolean) => {
    setOpen((prev) => b ?? !prev);
  };

  const actionbtns = (
    <div className="flex items-center space-x-4">
      {status === "unauthenticated" ? (
        <button
          onClick={() => modalRef.current?.open()}
          className="btn-darker py-2 px-4 font-medium"
        >
          Login
        </button>
      ) : (
        <Link href="/dashboard" className="h-10 w-10">
          <button className="btn btn-darker relative h-10 w-10 overflow-hidden border-0 p-0 font-medium uppercase">
            {session?.user?.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={session.user.image}
                className="h-full w-full rounded-[inherit]"
                alt=""
              />
            ) : (
              session?.user?.name?.charAt(0)
            )}
          </button>
        </Link>
      )}
      <ThemeSwitcher />
      <button className="btn h-10 w-10 sm:hidden" onClick={() => handleOpen()}>
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </button>
    </div>
  );

  return (
    <>
      <header
        className={`br fixed left-0 right-0 top-0 isolate z-40 
      border-0 bg-white/70 backdrop-blur-xl dark:bg-black/40 max-md:border-b`}
      >
        <div className="container flex flex-col overflow-hidden md:flex-row md:items-center md:justify-between">
          <div className="flex h-20 w-full items-center justify-between md:w-fit lg:h-24">
            <Link
              href="/"
              className="hover:text-gradient text-xl font-semibold"
            >
              HYPERBEAST
            </Link>
            <div className="md:hidden">{actionbtns}</div>
          </div>
          <nav
            style={{
              height: open && h && h > 30 ? h : 0,
            }}
            className="transition-[height] duration-300 max-sm:overflow-hidden sm:flex sm:!h-auto sm:space-x-4 lg:space-x-6"
          >
            <ul
              ref={ref}
              className={`group relative flex flex-col items-center space-y-2 pb-6 transition-[transform,opacity] duration-300 max-sm:pt-3 sm:flex-row sm:space-y-0 sm:pb-1 md:p-0 lg:space-x-6
              ${open ? "" : "max-sm:translate-y-5 max-sm:opacity-0"}`}
            >
              <span
                ref={animatedBgRef}
                id="animated-bg"
                className="absolute left-0 top-0 -z-[1] scale-0 rounded-lg bg-zinc-200/70 transition-transform group-hover:scale-100 dark:bg-zinc-700"
              />
              {menus.map((menu, i) => (
                <Link
                  onMouseEnter={(e) => {
                    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } =
                      e.currentTarget;
                    animatedBgRef?.current?.animate(
                      {
                        left: `${offsetLeft}px`,
                        top: `${offsetTop}px`,
                        height: `${offsetHeight}px`,
                        width: `${offsetWidth}px`,
                      },
                      { duration: 250, fill: "forwards" }
                    );
                  }}
                  href={menu.link}
                  onClick={() => handleOpen(false)}
                  key={i}
                  className="rounded-lg py-2 px-4 font-medium text-gray-700 hover:text-gray-900 group-hover:transition-colors dark:text-gray-300 dark:hover:text-white"
                >
                  {menu.name}
                </Link>
              ))}
            </ul>
            <div className="max-md:hidden">{actionbtns}</div>
          </nav>
        </div>
      </header>
      <div className="h-20 sm:h-[124px] md:h-20 lg:h-24" />
      <AuthModal ref={modalRef} />
    </>
  );
};
export default memo(Header);
