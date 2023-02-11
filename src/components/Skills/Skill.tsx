import type { SkillType } from "src/types/index.d";

const Skill: React.FC<SkillType> = ({ name, level, icon }) => {
  return (
    <div
      id="hover-card"
      className={`flex w-max 
      items-center
      gap-4 rounded-lg p-4 sm:min-w-[200px] md:gap-5 md:p-5`}
    >
      <span id="hover-card-overlay" />
      <div className="flex h-10 w-10 flex-shrink-0 items-center md:h-12 md:w-12">
        {icon}
      </div>
      <div>
        <p className="whitespace-nowrap text-lg font-medium">{name}</p>
        <p className={`c-secondary text-sm`}>{level}</p>
      </div>
    </div>
  );
};

export default Skill;
