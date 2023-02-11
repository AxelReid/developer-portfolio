import type { SkillType } from "src/types/index.d";

const Skill: React.FC<SkillType> = ({ name, level, icon }) => {
  return (
    <div
      id="skill"
      className={`relative w-max rounded-lg bg-zinc-200 before:bg-radial-before
      after:bg-radial-after dark:bg-zinc-700/50  dark:before:bg-radial-before-dark dark:after:bg-radial-after-dark sm:min-w-[200px]`}
    >
      <div
        id="skill-content"
        className="b relative z-[2] m-px flex flex-1 items-center gap-4 rounded-[inherit] p-4 md:gap-5 md:p-5"
      >
        <div className="flex h-10 w-10 flex-shrink-0 items-center md:h-12 md:w-12">
          {icon}
        </div>
        <div>
          <p className="whitespace-nowrap text-lg font-medium">{name}</p>
          <p className={`c-secondary text-sm`}>{level}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
