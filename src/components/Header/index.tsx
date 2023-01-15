"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "@components/ThemeSwitcher";
import { menus } from "@data/links";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = (b?: boolean) => {
    setOpen((prev) => b ?? !prev);
  };

  const back = (
    <div className="absolute inset-0 -z-[1] bg-white/70 backdrop-blur-lg dark:bg-black/40" />
  );
  return (
    <header
      className={`sticky top-0 isolate
      z-40 border-b border-zinc-100 dark:border-transparent`}
    >
      {back}
      <div className="container flex h-20 items-center justify-between md:h-24">
        <h2 className="text-lg">{"< asilbek />"}</h2>
        <div className="flex items-center space-x-6">
          <ul
            className={`absolute left-0 -z-10
            duration-300 ${
              open
                ? "visible top-20 md:top-24"
                : "invisible -top-[calc(100%+100px)]"
            }
            grid w-full grid-cols-2 place-items-center
            gap-5 py-10 sm:grid-cols-3
            lg:visible
            lg:relative lg:top-0 lg:left-auto lg:z-0 lg:flex lg:w-auto
            lg:items-center lg:gap-0 lg:space-x-3 lg:py-0 lg:transition-none`}
          >
            <span className="block lg:hidden">{back}</span>
            {menus.map((menu, i) => (
              <Link href={menu.link} key={i}>
                <span key={i} className="link">
                  {menu.name}
                </span>
              </Link>
            ))}
          </ul>
          {/* <Link href="/my-team">
            <button
              className="
              btn-darker
              py-2 px-4 font-medium"
            >
              My team
            </button>
          </Link> */}
          <ThemeSwitcher />
          <button
            className="btn h-10 w-10 lg:hidden"
            onClick={() => handleOpen()}
          >
            {open ? <XMarkIcon /> : <Bars3Icon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
