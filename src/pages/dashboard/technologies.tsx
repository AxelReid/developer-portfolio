import DashboardWrapper from "@components/Dashboard/DashboardWrapper";
import Switcher from "@components/Switcher";
import TitleWithBtn from "@components/TitleWithBtn";
import { TrashIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";

const Technologies: NextPage = () => {
  return (
    <DashboardWrapper>
      <TitleWithBtn
        title="Levels"
        btnTitle="Add a level"
        count={0}
        click={() => null}
      />
      <div className="flex items-center space-x-4">
        <div className="h-16 w-16 rounded-lg bg-black/10 dark:bg-white/20"></div>
        <h1 className="text-lg font-medium">Javascript</h1>
        <select value="" className="bb font-medium">
          <option value="Basic">Basic</option>
          <option value="Intermediate">Intermediate</option>
        </select>
        <div>
          <Switcher
            checked
            loading={false}
            size="small"
            onChange={() => null}
          />
          <button className="p-1 text-red-500" onClick={() => null}>
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Technologies;
