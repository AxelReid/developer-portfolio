import Title from "@components/Title";
import { handleHoverEffect } from "@utils/hoverCardEffect";
import Skill from "./Skill";
import skills from "./skills";

const Skills = () => {
  // TODO skills and stacks tabs
  return (
    <section id="skills" className="section overflow-hidden">
      <div className="container">
        <Title title="Skills" desc="My technical level" />
        <div onMouseMove={handleHoverEffect} id="hover-cards">
          {skills.map((sk, i) => (
            <div key={i}>
              <p className="mb-4 mt-10 text-lg font-medium">{sk[0]}</p>
              <div className="flex flex-wrap gap-2 md:gap-4">
                {sk[1].map((s, ii) => (
                  <Skill {...s} key={ii} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
