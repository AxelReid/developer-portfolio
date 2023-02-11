import type { MouseEvent } from "react";
import { useCallback } from "react";
import Title from "@components/Title";
import Skill from "./Skill";
import skills from "./skills";

const Skills = () => {
  const handleHoverEffect = useCallback(
    (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
      for (const card of e.currentTarget.querySelectorAll("#skill")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
        (card as HTMLDivElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLDivElement).style.setProperty("--mouse-y", `${y}px`);
      }
    },
    []
  );

  // TODO skills and stacks tabs
  return (
    <section id="skills" className="section overflow-hidden">
      <div className="container">
        <Title title="Skills" desc="My technical level" />
        <div onMouseMove={handleHoverEffect} className="skills">
          {skills.map((sk, i) => (
            <div key={i}>
              <p className="mb-4 mt-10 text-lg font-medium">{sk[0]}</p>
              <div className="cards flex flex-wrap gap-2 md:gap-4">
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
