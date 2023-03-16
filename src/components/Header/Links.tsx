import { menus } from "@static/links";
import Link from "next/link";
import type { LegacyRef } from "react";
import { useRef } from "react";

interface Props {
  closeMenu: () => void;
}

const Links: React.FC<Props> = ({ closeMenu }) => {
  const animatedBgRef: LegacyRef<HTMLSpanElement> = useRef(null);
  return (
    <>
      <span
        ref={animatedBgRef}
        id="animated-bg"
        className="absolute left-0 top-0 -z-[1] rounded-lg bg-black/10 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white/20"
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
          onClick={closeMenu}
          key={i}
          className="rounded-lg py-2 px-4 font-medium text-gray-700 hover:text-gray-900 group-hover:transition-colors dark:text-gray-300 dark:hover:text-white"
        >
          {menu.name}
        </Link>
      ))}
    </>
  );
};

export default Links;
