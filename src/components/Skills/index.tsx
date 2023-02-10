import Title from "@components/Title";
import { Level } from "src/types/index.d";
import Skill from "./Skill";

const skills: [string, { name: string; level: Level }[]][] = [
  [
    "Programming languages",
    [
      { name: "Javascript", level: Level.Advanced },
      { name: "Typescript", level: Level.Advanced },
    ],
  ],
  [
    "UI libraries & frameworks",
    [
      { name: "React JS", level: Level.Advanced },
      { name: "Next JS", level: Level.Advanced },
      { name: "Next-auth", level: Level.Intermediate },
      { name: "Redux | Recoil", level: Level.Intermediate },
    ],
  ],
  [
    "Backend libraries & frameworks",
    [
      { name: "Nest JS", level: Level.Intermediate },
      { name: "Node JS", level: Level.Intermediate },
      { name: "Express JS", level: Level.Intermediate },
      { name: "Type-graphql", level: Level.Intermediate },
      { name: "tRPC", level: Level.Intermediate },
    ],
  ],
  [
    "Design tools",
    [
      { name: "Tailwind CSS", level: Level.Advanced },
      { name: "Mantine Dev", level: Level.Advanced },
      { name: "Styled | SCSS", level: Level.Advanced },
      { name: "Framer Motion", level: Level.Intermediate },
      { name: "Figma", level: Level.Basic },
    ],
  ],
  [
    "Api Integration",
    [
      { name: "Rest API & Axios", level: Level.Advanced },
      { name: "GraphQl Apollo", level: Level.Intermediate },
      { name: "React-Query", level: Level.Intermediate },
      { name: "Swagger", level: Level.Intermediate },
    ],
  ],
  [
    "Databases",
    [
      { name: "Type ORM", level: Level.Intermediate },
      { name: "Prisma", level: Level.Intermediate },
      { name: "MongoDB", level: Level.Intermediate },
      { name: "Mikro ORM", level: Level.Basic },
    ],
  ],
  ["Mobile development", [{ name: "React Native", level: Level.Basic }]],
  ["Desktop developemnt", [{ name: "Tauri JS", level: Level.Basic }]],
  ["DevOps", [{ name: "Docker", level: Level.Basic }]],
];

// TODO skills and stacks tabs
const Skills = () => {
  return (
    <section id="skills" className="section overflow-hidden">
      <div className="container">
        <Title title="Skills" desc="My technical level" />
        <div>
          {skills.map((sk, i) => (
            <div key={i}>
              <p className="mb-4 mt-10 text-lg font-medium">{sk[0]}</p>
              <div className="flex flex-wrap gap-4">
                {sk[1].map((s, ii) => (
                  <Skill {...s} key={ii} />
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* <Carousel className="space-x-5 md:space-x-10">
          <SkillsWrapper title="Frontend developer" data={front} />
          <SkillsWrapper title="Backend developer" data={back} />
        </Carousel> */}
      </div>
    </section>
  );
};

export default Skills;
