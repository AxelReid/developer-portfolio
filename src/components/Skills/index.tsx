import { handleHoverEffect } from "@utils/hoverCardEffect";
import { useState } from "react";
import type { SkillType } from "src/types";
import Skill from "./Skill";
import type { SkillTabType } from "./skills";
import { descriptions } from "./skills";
import { groupBy } from "./skills";
import { skillsTab } from "./skills";

const Skills = () => {
  const [activeTab, setActiveTab] = useState<SkillTabType>("stacks");

  return (
    <section
      id="skills"
      className="section container max-w-[1208px] scroll-mt-32 !pt-0"
    >
      {/* <Title title="Skills" desc="My technical level" /> */}
      <div className="flex gap-4">
        {skillsTab.map((tab, i) => (
          <button
            onClick={() => setActiveTab(tab.id)}
            className={`btn ${tab.id === activeTab ? "btn-darker" : ""} px-3`}
            key={i}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div onMouseMove={handleHoverEffect} id="hover-cards">
        {Object.entries(groupBy(activeTab)).map((sk, i) => {
          const desc = descriptions?.find((d) => d.key === sk[0])?.value;

          return (
            <div key={i}>
              <div className="mb-4 mt-10">
                <p className="text-lg font-medium">{sk[0]}</p>
                {desc && <p className="c-secondary my-1 text-sm">{desc}</p>}
              </div>
              <div className="flex flex-wrap gap-2 md:gap-4">
                {(sk[1] as SkillType[]).map((s, ii) => (
                  <Skill {...s} key={ii} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
