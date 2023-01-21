import type { ServiceProps } from "src/types/service";

export const services: ServiceProps[] = [
  {
    id: 1,
    title: "Frontend Development",
    description: "What i usually make a frontend stack with",
    img: "/images/frontend-icon.png",
    techs: ["React.js", "Next.js", "Typescript", "Tailwind CSS", "Mantine.dev"],
    more: true,
  },
  {
    id: 2,
    title: "Backend Development",
    description: "What i usually make backend stacks with",
    img: "/images/backend-icon.png",
    techs: ["Nest.js", "Typescript", "Type ORM", "GraphQL Apollo", "Swagger"],
    more: true,
  },
  {
    id: 3,
    title: "Fullstack Development",
    description: "What i made full stacks with",
    img: "/images/fullstack-icon.png",
    techs: ["GAAN Stack", "N2 Stack", "T3 Stack"],
  },
];
