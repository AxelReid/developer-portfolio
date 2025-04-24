import type { SkillType } from "src/types/index.d";

const Skill: React.FC<SkillType> = ({ name, level, icon }) => {
  return (
    <div
      id="hover-card"
      className={`flex w-max 
      items-center
      gap-4 rounded-lg p-3 sm:p-4 sm:px-5`}
    >
      <span id="hover-card-overlay" />
      <div className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10">{icon}</div>
      <div>
        <p className="whitespace-nowrap text-base font-medium sm:text-lg">
          {name}
        </p>
        <p className={`c-secondary text-xs sm:text-sm`}>{level}</p>
      </div>
    </div>
  );
};

export default Skill;
