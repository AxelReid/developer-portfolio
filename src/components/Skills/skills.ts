import * as Icon from "@components/icons/pl";
import { SkillLevel, SkillType } from "src/types/index.d";

const skill = (
  name: string,
  level: SkillLevel,
  icon: JSX.Element
): SkillType => ({
  name,
  level,
  icon,
});

export const skills = {
  "Programming languages": [
    skill("Javascript", SkillLevel.Advanced, Icon.js),
    skill("Typescript", SkillLevel.Advanced, Icon.ts),
    skill("Python", SkillLevel.Intermediate, Icon.python),
    skill("Kotlin", SkillLevel.Basic, Icon.kotlin),
    skill("Swift", SkillLevel.Basic, Icon.swift),
  ],
  "Web libraries & frameworks": [
    skill("React JS", SkillLevel.Advanced, Icon.rctjs),
    skill("Next JS", SkillLevel.Advanced, Icon.nxtjs),
    skill("Svelte Kit", SkillLevel.Advanced, Icon.sv),
  ],
  "Backend libraries & frameworks": [
    skill("Node JS", SkillLevel.Advanced, Icon.nodejs),
    skill("Nest JS", SkillLevel.Advanced, Icon.nestjs),
    skill("Express JS", SkillLevel.Advanced, Icon.exjs),
  ],
  "Web Design tools": [
    skill("CSS | SCSS | Styled", SkillLevel.Advanced, Icon.css),
    skill("Tailwind CSS", SkillLevel.Advanced, Icon.tlwncss),
    skill("Mantine Dev", SkillLevel.Advanced, Icon.mantinedev),
    skill("Framer Motion", SkillLevel.Advanced, Icon.framermotion),
    skill("Figma", SkillLevel.Intermediate, Icon.figma),
  ],
  Databases: [
    skill("Postgresql", SkillLevel.Intermediate, Icon.pglogo),
    skill("Sqlite", SkillLevel.Intermediate, Icon.sqlite),
    skill("Redis", SkillLevel.Intermediate, Icon.redis),
    skill("MongoDB", SkillLevel.Advanced, Icon.mongodb),
    skill("Prisma", SkillLevel.Advanced, Icon.prsm),
    skill("Type ORM", SkillLevel.Intermediate, Icon.typeorm),
  ],
  "API Integration": [
    skill("Rest API", SkillLevel.Advanced, Icon.restapi),
    skill("GraphQl", SkillLevel.Advanced, Icon.gql),
    skill("tRPC", SkillLevel.Advanced, Icon.trpc),
  ],
  "Mobile development": [
    skill("React Native", SkillLevel.Intermediate, Icon.rcnative),
    skill("Jetpack Compose", SkillLevel.Basic, Icon.kotlin),
    skill("SwiftUI", SkillLevel.Basic, Icon.swift),
    skill("Kotlin Multiplatform", SkillLevel.Basic, Icon.kotlin),
  ],
  "Desktop development": [
    skill("Electron JS", SkillLevel.Intermediate, Icon.electron),
    skill("Tauri JS", SkillLevel.Intermediate, Icon.tauri),
    skill("Compose Multiplatform", SkillLevel.Basic, Icon.cmp),
  ],
};
