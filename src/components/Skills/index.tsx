import Title from "@components/Title";
import { handleHoverEffect } from "@utils/hoverCardEffect";
import Skill from "./Skill";
import { skills } from "./skills";

const Skills = () => {
  return (
    <section id="skills" className="sTo">
      <Title title="Skills" desc="Technical level" />
      <div
        onMouseMove={handleHoverEffect}
        id="hover-cards"
        className="content container"
      >
        {Object.entries(skills).map(([name, techs]) => {
          return (
            <div key={name}>
              <div className="mb-2 mt-6">
                <p className="text-lg font-medium">{name}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech, i) => (
                  <Skill {...tech} key={i} />
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
