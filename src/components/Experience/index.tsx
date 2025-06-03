import Title from "@components/Title";
import { experience } from "./helpers";
import Work from "./Work";

export type WorkType = {
  title: string;
  company: string;
  desc?: string;
  site?: string;
  date: {
    start: string;
    end: string;
  };
};

const Qualification = () => {
  return (
    <section id="qualification" className="sTo">
      <Title title="Experience" desc="Work history" />

      <div className="content container">
        <div className="relative flex">
          <div className="bottom-3 mt-3 ml-2.5 w-0.5 bg-gradient-to-b from-zinc-300 to-transparent dark:from-zinc-700" />

          <div className="space-y-6 pl-[1.8rem]">
            {experience.map((ex, i) => (
              <Work key={i} {...ex} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
