import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { Level } from "src/types/index.d";

interface Props {
  name: string;
  level: Level;
}

const Skill: React.FC<Props> = ({ name, level }) => {
  const bg = `${
    level === Level.Advanced
      ? "bg-red-500/10 dark:bg-red-500/20"
      : level === Level.Intermediate
      ? "bg-orange-500/10 dark:bg-yellow-500/10"
      : "bg-blue-500/10"
  }`;
  const cl = `${
    level === Level.Advanced
      ? "text-red-600"
      : level === Level.Intermediate
      ? "text-yellow-500"
      : "text-blue-400"
  }`;
  return (
    <div
      className={` flex min-w-[200px] items-start gap-2.5 rounded-lg p-5 ${bg}`}
    >
      <CheckBadgeIcon
        strokeWidth={1.25}
        className={`mt-1 w-6 flex-shrink-0 ${cl}`}
      />
      <div>
        <p className="text-lg font-medium">{name}</p>
        <p className={`c-secondary mt-1 text-sm`}>{level}</p>
      </div>
    </div>
  );
};

export default Skill;
