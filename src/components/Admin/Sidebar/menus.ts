import { UserIcon } from "@heroicons/react/24/outline";

export const menus = [
  { icon: UserIcon, name: "Profile", path: "/admin" },
  { icon: UserIcon, name: "Projects", path: "/admin/manage-projects" },
  { icon: UserIcon, name: "Users", path: "/admin/manage-users" },
  { icon: UserIcon, name: "Reviews", path: "/admin/manage-reviews" },
];

export type MenuItemType = {
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  name: string;
  path?: string;
};
