import Carousel from "@components/Carousel";
import Title from "@components/Title";
import SkillsWrapper from "./SkillsWrapper";

const levels: [string, string, string] = ["Basic", "Intermediate", "Advanced"];

const front = [
  { name: "Javascript", level: levels[2] },
  { name: "Typescript", level: levels[1] },
  { name: "React JS", level: levels[2] },
  { name: "Next JS", level: levels[2] },
  { name: "Next-auth", level: levels[1] },
  { name: "Apollo Client", level: levels[1] },
  { name: "Redux | Recoil", level: levels[1] },
  { name: "React-Query", level: levels[1] },
  { name: "Tailwind CSS", level: levels[2] },
  { name: "Mantine Dev", level: levels[2] },
  { name: "Framer Motion", level: levels[1] },
  { name: "Styled | SCSS", level: levels[2] },
  { name: "Figma", level: levels[0] },
  { name: "React Native", level: levels[0] },
  { name: "Tauri JS", level: levels[0] },
];
const back = [
  { name: "Next JS", level: levels[2] },
  { name: "Nest JS", level: levels[1] },
  { name: "Node JS", level: levels[1] },
  { name: "Express JS", level: levels[1] },
  { name: "Apollo Server", level: levels[1] },
  { name: "tRPC", level: levels[1] },
  { name: "Prisma", level: levels[1] },
  { name: "Type ORM", level: levels[1] },
  { name: "Swagger", level: levels[1] },
  { name: "MongoDB", level: levels[1] },
  { name: "Docker", level: levels[0] },
];

// TODO skills and stacks tabs
const Skills = () => {
  return (
    <section id="skills" className="section overflow-hidden">
      <div className="container">
        <Title title="Skills" desc="My technical level" />
        <Carousel className="space-x-5 md:space-x-10">
          <SkillsWrapper title="Frontend developer" data={front} />
          <SkillsWrapper title="Backend developer" data={back} />
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;
