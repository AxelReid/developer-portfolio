import {
  StarIcon,
  UserGroupIcon,
  UserCircleIcon,
  ArchiveBoxIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import { Role } from "src/types/next-auth.d";

export const menus = [
  {
    icon: UserCircleIcon,
    name: "Profile",
    path: "/dashboard",
    permissions: [Role.USER, Role.ADMIN],
  },
  {
    icon: ArchiveBoxIcon,
    name: "Projects",
    path: "/dashboard/manage-projects",
    permissions: [Role.ADMIN],
  },
  {
    icon: UserGroupIcon,
    name: "Users",
    path: "/dashboard/manage-users",
    permissions: [Role.ADMIN],
  },
  {
    icon: ChatBubbleBottomCenterTextIcon,
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
  {
    icon: ArrowUpTrayIcon,
    name: "Uploads",
    path: "/dashboard/manage-uploads",
    permissions: [Role.ADMIN],
  },
];

export type MenuItemType = {
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  name: string;
  path?: string;
};
