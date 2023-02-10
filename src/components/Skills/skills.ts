import {
  apollo,
  css,
  docker,
  exjs,
  figma,
  framermotion,
  gql,
  js,
  jwt,
  mantinedev,
  mongodb,
  nestjs,
  nodejs,
  nxtjs,
  prsm,
  psprtjs,
  rcnative,
  rctjs,
  redis,
  redux,
  restapi,
  rquery,
  swgr,
  swr,
  tauri,
  tlwncss,
  trpc,
  ts,
  typeorm,
} from "@components/icons/pl";
import type { SkillType } from "src/types/index.d";
import { SkillLevel } from "src/types/index.d";

const skills: [string, SkillType[]][] = [
  [
    "Programming languages",
    [
      {
        name: "Javascript",
        level: SkillLevel.Advanced,
        icon: js,
      },
      {
        name: "Typescript",
        level: SkillLevel.Advanced,
        icon: ts,
      },
    ],
  ],
  [
    "UI libraries & frameworks",
    [
      {
        name: "React JS",
        level: SkillLevel.Advanced,
        icon: rctjs,
      },
      {
        name: "Next JS",
        level: SkillLevel.Advanced,
        icon: nxtjs,
      },
      {
        name: "Next-auth",
        level: SkillLevel.Intermediate,
        icon: nxtjs,
      },
      {
        name: "Redux | Recoil",
        level: SkillLevel.Intermediate,
        icon: redux,
      },
    ],
  ],
  [
    "Backend libraries & frameworks",
    [
      {
        name: "Nest JS",
        level: SkillLevel.Intermediate,
        icon: nestjs,
      },
      {
        name: "Node JS",
        level: SkillLevel.Intermediate,
        icon: nodejs,
      },
      {
        name: "Express JS",
        level: SkillLevel.Intermediate,
        icon: exjs,
      },
      { name: "Graphql", level: SkillLevel.Intermediate, icon: gql },
      { name: "tRPC", level: SkillLevel.Intermediate, icon: trpc },
      { name: "Passport Js", level: SkillLevel.Basic, icon: psprtjs },
      { name: "JWT", level: SkillLevel.Advanced, icon: jwt },
    ],
  ],
  [
    "Design tools",
    [
      { name: "Tailwind CSS", level: SkillLevel.Advanced, icon: tlwncss },
      { name: "Mantine Dev", level: SkillLevel.Advanced, icon: mantinedev },
      { name: "Styled | SCSS", level: SkillLevel.Advanced, icon: css },
      {
        name: "Framer Motion",
        level: SkillLevel.Intermediate,
        icon: framermotion,
      },
      { name: "Figma", level: SkillLevel.Basic, icon: figma },
    ],
  ],
  [
    "Api Integration",
    [
      { name: "Rest API & Axios", level: SkillLevel.Advanced, icon: restapi },
      { name: "SWR", level: SkillLevel.Intermediate, icon: swr },
      { name: "GraphQl Apollo", level: SkillLevel.Intermediate, icon: apollo },
      { name: "React-Query", level: SkillLevel.Intermediate, icon: rquery },
      { name: "Swagger", level: SkillLevel.Intermediate, icon: swgr },
    ],
  ],
  [
    "Databases",
    [
      { name: "Type ORM", level: SkillLevel.Intermediate, icon: typeorm },
      { name: "Prisma", level: SkillLevel.Intermediate, icon: prsm },
      { name: "MongoDB", level: SkillLevel.Intermediate, icon: mongodb },
      { name: "Redis", level: SkillLevel.Basic, icon: redis },
    ],
  ],
  [
    "Mobile development",
    [{ name: "React Native", level: SkillLevel.Basic, icon: rcnative }],
  ],
  [
    "Desktop developemnt",
    [{ name: "Tauri JS", level: SkillLevel.Basic, icon: tauri }],
  ],
  ["DevOps", [{ name: "Docker", level: SkillLevel.Basic, icon: docker }]],
];
export default skills;
