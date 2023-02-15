import Link from "next/link";
import { useRouter } from "next/router";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import type { MenuItemType } from "./menus";

type Props = MenuItemType;
const MenuItem: React.FC<
  Props &
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
> = (props) => {
  const { path, name, className = "", icon, ...rest } = props;
  const router = useRouter();

  const btn = (
    <button
      className={`${
        router.pathname === path
          ? "btn-darker"
          : "hover:bg-black/5 dark:hover:bg-white/5"
      } flex h-[42px] w-[42px] items-center gap-3 p-2 font-medium
        max-md:justify-center md:w-52
        ${className}`}
      {...rest}
    >
      <props.icon className="w-5 flex-shrink-0" />
      <span className="max-md:hidden ">{name}</span>
    </button>
  );

  if (path) return <Link href={path}>{btn}</Link>;
  return btn;
};

export default MenuItem;
