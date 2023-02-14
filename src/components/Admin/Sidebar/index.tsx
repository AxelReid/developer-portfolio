import { MinusCircleIcon } from "@heroicons/react/24/outline";
import MenuItem from "./MenuItem";
import { menus } from "./menus";

const Sidebar = () => {
  return (
    <div className="sticky top-20 sm:top-[124px] md:top-20 lg:top-24">
      <span className="absolute top-0 bottom-0 right-full flex w-screen bg-white/70 dark:bg-black/40" />
      <aside
        className="relative
      flex 
      h-[calc(100vh-80px)] w-fit 
      flex-col justify-between overflow-y-auto
      border-r border-zinc-100 bg-white/70 p-2 pl-1 dark:border-transparent 
      dark:bg-black/40 
      sm:h-[calc(100vh-124px)] 
      sm:p-4 
      sm:pl-1 
      md:h-[calc(100vh-80px)] 
      lg:h-[calc(100vh-96px)]"
      >
        <div className="relative flex flex-col gap-2">
          {menus.map((menu, i) => (
            <MenuItem key={i} {...menu} />
          ))}
        </div>
        <MenuItem
          icon={MinusCircleIcon}
          name="Log out"
          className="bg-red-500/10 text-red-500 dark:bg-red-500/20"
        />
      </aside>
    </div>
  );
};
export default Sidebar;