import {
  apollo,
  css,
  docker,
  exjs,
  figma,
  framermotion,
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
  sqlite,
  swgr,
  swr,
  tauri,
  tlwncss,
  trpc,
  ts,
  typeorm,
} from "@components/icons/pl";
import type { SkillType } from "src/types/index.d";
import { SkillLevel, Stacks } from "src/types/index.d";

enum Categories {
  "Programming languages" = "Programming languages",
  "UI libraries & frameworks" = "UI libraries & frameworks",
  "Backend libraries & frameworks" = "Backend libraries & frameworks",
  "Api Integration" = "Api Integration",
  "Databases" = "Databases",
  "Design tools" = "Design tools",
  "Others" = "Others",
}

export const skills: SkillType[] = [
  {
    name: "Javascript",
    level: SkillLevel.Advanced,
    icon: js,
    category: Categories["Programming languages"],
    stacks: [],
  },
  {
    name: "Typescript",
    level: SkillLevel.Advanced,
    icon: ts,
    category: Categories["Programming languages"],
    stacks: [Stacks.Hyperbeast, Stacks.T3, Stacks.MERN],
  },
  {
    name: "React JS",
    level: SkillLevel.Advanced,
    icon: rctjs,
    category: Categories["UI libraries & frameworks"],
    stacks: [Stacks.MERN],
  },
  {
    name: "Next JS",
    level: SkillLevel.Advanced,
    category: Categories["UI libraries & frameworks"],
    icon: nxtjs,
    stacks: [Stacks.Hyperbeast, Stacks.T3],
  },
  {
    name: "Next-auth",
    level: SkillLevel.Intermediate,
    category: Categories["UI libraries & frameworks"],
    icon: nxtjs,
    stacks: [Stacks.T3],
  },
  {
    name: "Redux | Recoil",
    level: SkillLevel.Intermediate,
    category: Categories["UI libraries & frameworks"],
    icon: redux,
    stacks: [],
  },
  {
    name: "Nest JS",
    level: SkillLevel.Intermediate,
    icon: nestjs,
    category: Categories["Backend libraries & frameworks"],
    stacks: [Stacks.Hyperbeast],
  },
  {
    name: "Node JS",
    level: SkillLevel.Intermediate,
    icon: nodejs,
    category: Categories["Backend libraries & frameworks"],
    stacks: [Stacks.MERN],
  },
  {
    name: "Express JS",
    level: SkillLevel.Intermediate,
    icon: exjs,
    category: Categories["Backend libraries & frameworks"],
    stacks: [Stacks.MERN],
  },
  // {
  //   name: "Graphql",
  //   level: SkillLevel.Intermediate,
  //   icon: gql,
  //   category: Categories["Backend libraries & frameworks"],
  //   stacks: [Stacks.Hyperbeast],
  // },
  {
    name: "tRPC",
    level: SkillLevel.Intermediate,
    icon: trpc,
    category: Categories["Backend libraries & frameworks"],
    stacks: [Stacks.T3],
  },
  {
    name: "Passport Js",
    level: SkillLevel.Basic,
    icon: psprtjs,
    category: Categories["Backend libraries & frameworks"],
    stacks: [],
  },
  {
    name: "JWT",
    level: SkillLevel.Advanced,
    icon: jwt,
    category: Categories["Backend libraries & frameworks"],
    stacks: [],
  },
  {
    name: "Tailwind CSS",
    level: SkillLevel.Advanced,
    icon: tlwncss,
    category: Categories["Design tools"],
    stacks: [Stacks.T3],
  },
  {
    name: "Mantine Dev",
    level: SkillLevel.Advanced,
    icon: mantinedev,
    category: Categories["Design tools"],
    stacks: [Stacks.Hyperbeast],
  },
  {
    name: "Styled | SCSS",
    level: SkillLevel.Advanced,
    icon: css,
    category: Categories["Design tools"],
    stacks: [],
  },
  {
    name: "Framer Motion",
    level: SkillLevel.Intermediate,
    icon: framermotion,
    category: Categories["Design tools"],
    stacks: [],
  },
  {
    name: "Figma",
    level: SkillLevel.Basic,
    icon: figma,
    category: Categories["Design tools"],
    stacks: [],
  },
  {
    name: "Rest API & Axios",
    level: SkillLevel.Advanced,
    icon: restapi,
    category: Categories["Api Integration"],
    stacks: [],
  },
  {
    name: "SWR",
    level: SkillLevel.Intermediate,
    icon: swr,
    category: Categories["Api Integration"],
    stacks: [],
  },
  {
    name: "GraphQl Apollo",
    level: SkillLevel.Intermediate,
    icon: apollo,
    category: Categories["Api Integration"],
    stacks: [Stacks.Hyperbeast],
  },
  {
    name: "React-Query",
    level: SkillLevel.Intermediate,
    icon: rquery,
    category: Categories["Api Integration"],
    stacks: [],
  },
  {
    name: "Swagger",
    level: SkillLevel.Intermediate,
    icon: swgr,
    category: Categories["Api Integration"],
    stacks: [],
  },
  {
    name: "Type ORM",
    level: SkillLevel.Intermediate,
    icon: typeorm,
    category: Categories.Databases,
    stacks: [Stacks.Hyperbeast],
  },
  {
    name: "Prisma",
    level: SkillLevel.Intermediate,
    icon: prsm,
    category: Categories.Databases,
    stacks: [Stacks.T3],
  },
  {
    name: "MongoDB",
    level: SkillLevel.Intermediate,
    icon: mongodb,
    category: Categories.Databases,
    stacks: [Stacks.MERN],
  },
  {
    name: "Redis",
    level: SkillLevel.Basic,
    icon: redis,
    category: Categories.Databases,
    stacks: [],
  },
  {
    name: "React Native",
    level: SkillLevel.Basic,
    icon: rcnative,
    category: Categories.Others,
    stacks: [],
  },
  {
    name: "Tauri JS",
    level: SkillLevel.Basic,
    icon: tauri,
    category: Categories.Others,
    stacks: [],
  },
  {
    name: "Docker",
    level: SkillLevel.Basic,
    icon: docker,
    category: Categories.Others,
    stacks: [],
  },
  {
    name: "Sqlite",
    level: SkillLevel.Intermediate,
    icon: sqlite,
    category: Categories.Databases,
    stacks: [],
  },
];

export const skillsTab: { id: SkillTabType; name: string }[] = [
  { id: "stacks", name: "Stacks" },
  { id: "category", name: "Technologies" },
];
export type SkillTabType = "category" | "stacks";
export const descriptions = [
  {
    key: Stacks.Hyperbeast,
    value:
      "My main full stack. Depending on project requirements or preferences i change or add others tools.",
  },
  {
    key: Stacks.T3,
    value:
      "My favourite set of tools to built full stack apps with the best DX every.",
  },
] as const;

export const groupBy = (key: SkillTabType) =>
  skills.reduce((prev: { [key: string]: any }, cur: { [key: string]: any }) => {
    const kk = cur[key] as string | string[];

    const handle = (k: string) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      prev[k] = prev[k] ? [...prev[k], cur] : [cur];
    };

    if (typeof kk === "string") handle(kk);
    else kk.forEach((k) => handle(k));

    return prev;
  }, {});
