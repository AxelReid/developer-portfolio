import { StarIcon, UserIcon } from "@heroicons/react/24/outline";
import { Role } from "src/types/next-auth.d";

export const menus = [
  {
    icon: UserIcon,
    name: "Profile",
    path: "/dashboard",
    permissions: [Role.USER, Role.ADMIN],
  },
  {
    icon: UserIcon,
    name: "Projects",
    path: "/dashboard/manage-projects",
    permissions: [Role.ADMIN],
  },
  {
    icon: UserIcon,
    name: "Users",
    path: "/dashboard/manage-users",
    permissions: [Role.ADMIN],
  },
  {
    icon: UserIcon,
    name: "Reviews",
    path: "/dashboard/manage-reviews",
    permissions: [Role.ADMIN],
  },
  {
    icon: StarIcon,
    name: "Give a feedback",
    path: "/dashboard/give-a-feedback",
    permissions: [Role.USER],
  },
];

export type MenuItemType = {
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  name: string;
  path?: string;
};
