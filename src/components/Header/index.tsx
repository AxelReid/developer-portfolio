"use client";

import type { LegacyRef } from "react";
import { useMemo, useRef, useState, memo } from "react";
import Link from "next/link";
import ThemeSwitcher from "@components/ThemeSwitcher";
import { menus } from "@static/links";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import AuthModal from "@components/Modal/AuthModal";
import type { ModalMutableRefProps } from "src/types/modalRef";
import { useSession } from "next-auth/react";

const Header = memo(() => {
  const { data: session } = useSession();

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
      {!session ? (
        <button
          onClick={() => modalRef.current?.open()}
          className="btn-darker py-2 px-4 font-medium"
        >
          Login
        </button>
      ) : (
        <Link href="/admin" className="h-10 w-10">
          <button className="btn btn-darker relative h-10 w-10 overflow-hidden border-0 p-0 font-medium uppercase">
            {session.user?.image ? (
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
        className={`br fixed left-0 right-0 top-0 isolate
      z-40 border-b bg-white/70
      backdrop-blur-xl dark:bg-black/40 md:border-0`}
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
              className={`flex flex-col items-center space-y-2 pb-6 transition-[transform,opacity] duration-300 max-sm:pt-3 sm:flex-row sm:space-y-0 sm:pb-1 md:p-0 lg:space-x-6
          ${open ? "" : "max-sm:translate-y-5 max-sm:opacity-0"}
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
            <div className="max-md:hidden">{actionbtns}</div>
          </nav>
        </div>
      </header>
      <div className="h-20 sm:h-[124px] md:h-20 lg:h-24" />
      <AuthModal ref={modalRef} />
    </>
  );
});
Header.displayName = "Header";
export default Header;
