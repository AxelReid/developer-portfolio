"use client";

import type { LegacyRef } from "react";
import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "@components/ThemeSwitcher";
import { menus } from "@static/links";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import AuthModal from "@components/Modal/AuthModal";
import type { ModalMutableRefProps } from "src/types/modalRef";

const Header = () => {
  const modalRef: ModalMutableRefProps = useRef(null);
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
      <button
        onClick={() => modalRef.current?.open()}
        className="btn-darker py-2 px-4 font-medium"
      >
        Login
      </button>
      <ThemeSwitcher />
      <button className="btn h-10 w-10 lg:hidden" onClick={() => handleOpen()}>
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </button>
    </div>
  );

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 isolate z-40
      border-b border-zinc-100 bg-white/70
      backdrop-blur-xl dark:border-transparent dark:bg-black/40`}
      >
        <div className="container flex flex-col overflow-hidden md:justify-between lg:flex-row lg:items-center">
          <div className="flex h-20 w-full items-center justify-between lg:h-24 lg:w-fit">
            <Link
              href="/"
              className="hover:text-gradient text-xl font-semibold"
            >
              HYPERBEAST
            </Link>
            <div className="lg:hidden">{actionbtns}</div>
          </div>
          <nav
            style={{
              height: open && h && h > 30 ? h : 0,
            }}
            className="transition-[height] duration-300 max-lg:overflow-hidden lg:flex lg:!h-auto lg:space-x-6"
          >
            <ul
              ref={ref}
              className={`flex flex-col items-center space-y-2 pt-3 pb-6 transition-[transform,opacity] duration-300 lg:flex-row lg:space-y-0 lg:space-x-6 lg:p-0
            ${open ? "" : "max-lg:translate-y-5 max-lg:opacity-0"}
            `}
            >
              {menus.map((menu, i) => (
                <Link
                  href={menu.link}
                  onClick={() => handleOpen(false)}
                  key={i}
                  className="link"
                >
                  {menu.name}
                </Link>
              ))}
            </ul>
            <div className="max-lg:hidden">{actionbtns}</div>
          </nav>
        </div>
      </header>
      <div className="h-20 lg:h-24" />
      <AuthModal ref={modalRef} />
    </>
  );
};

export default Header;
